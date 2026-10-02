"""Alinea la grilla de íconos del UI Kit (public/img/dig-uikit.jpg).

En el diseño original los 12 íconos están dibujados con separaciones y alturas desparejas. Este script
detecta cada ícono (por su color naranja), borra la zona y vuelve a ubicarlos centrados en una grilla
de 6 columnas x 2 filas con paso constante.

Se ejecuta después de `npm run imagenes` (que regenera la imagen desde el diseño y pisa este arreglo):

    python tools/alinear_iconos.py
"""
from pathlib import Path

import numpy as np
from PIL import Image

RUTA = Path(__file__).resolve().parent.parent / "public" / "img" / "dig-uikit.jpg"
ZONA = (590, 285, 1175, 470)  # x0, y0, x1, y1 donde viven los íconos
COLUMNAS_X = (640, 1112)  # centro de la primera y la última columna
FILAS_Y = (331.5, 417.0)  # centro de cada fila

img = Image.open(RUTA).convert("RGB")
a = np.array(img).astype(int)
x0, y0, x1, y1 = ZONA

naranja = (a[:, :, 0] > 215) & (a[:, :, 1] > 70) & (a[:, :, 1] < 150) & (a[:, :, 2] < 110)
mascara = np.zeros_like(naranja)
mascara[y0:y1, x0:x1] = True
naranja &= mascara


def tramos(vector, hueco):
    """Rangos consecutivos de índices con valor > 0, unidos si están a menos de `hueco` px."""
    res, ini = [], None
    for i, v in enumerate(vector):
        if v > 0 and ini is None:
            ini = i
        if v == 0 and ini is not None:
            res.append([ini, i - 1])
            ini = None
    unidos = []
    for r in res:
        if unidos and r[0] - unidos[-1][1] < hueco:
            unidos[-1][1] = r[1]
        else:
            unidos.append(r)
    return unidos


filas = [f for f in tramos(naranja.sum(1), 8) if f[1] - f[0] > 20]
assert len(filas) == 2, f"se esperaban 2 filas de íconos, hay {len(filas)}"

iconos = []  # (fila, recorte)
for n, (fy0, fy1) in enumerate(filas):
    cols = tramos(naranja[fy0 : fy1 + 1].sum(0), 8)
    assert len(cols) == 6, f"se esperaban 6 íconos en la fila {n + 1}, hay {len(cols)}"
    for cx0, cx1 in cols:
        sub = naranja[fy0 : fy1 + 1, cx0 : cx1 + 1]
        ys = np.where(sub.any(1))[0]
        ty0, ty1 = fy0 + ys.min(), fy0 + ys.max()
        m = 3  # margen para conservar el suavizado de los bordes
        iconos.append((n, img.crop((cx0 - m, ty0 - m, cx1 + 1 + m, ty1 + 1 + m))))

fondo = tuple(int(v) for v in np.median(a[y0:y1, x0:x1].reshape(-1, 3), axis=0))
lienzo = img.copy()
lienzo.paste(Image.new("RGB", (x1 - x0, y1 - y0), fondo), (x0, y0))

paso = (COLUMNAS_X[1] - COLUMNAS_X[0]) / 5
for k, (fila, recorte) in enumerate(iconos):
    col = k % 6
    cx = COLUMNAS_X[0] + paso * col
    cy = FILAS_Y[fila]
    lienzo.paste(recorte, (round(cx - recorte.width / 2), round(cy - recorte.height / 2)))

lienzo.save(RUTA, "JPEG", quality=92, optimize=True)
print(f"OK: {len(iconos)} íconos alineados en {RUTA.name}")
