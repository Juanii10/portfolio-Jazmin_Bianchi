"""Arma los dos banners web de Diseño digital con las fotos originales (sin las flechas de carrusel
que traía el diseño pegadas en la imagen).

Las fotos están en tools/originales/. De la imagen actual de public/img se conservan el borde negro de
arriba y las dos etiquetas rosas ("Mueblin Hogar 2025" / "Comardex 2025"); la foto se reemplaza.
Se ejecuta después de `npm run imagenes` (que regenera los banners desde el diseño, con flechas):

    python tools/armar_banners.py

Se puede correr más de una vez: siempre parte de las fotos originales.
"""
from pathlib import Path

from PIL import Image

RAIZ = Path(__file__).resolve().parent.parent
ORIGINALES = RAIZ / "tools" / "originales"
IMG = RAIZ / "public" / "img"

# Zonas de las etiquetas rosas (x0, y0, x1, y1), en px de las imágenes de 2320 px de ancho.
ETIQUETAS_MUEBLIN = ((61, 0, 379, 63), (183, 45, 451, 109))
ETIQUETAS_COMARDEX = ((61, 0, 379, 65), (183, 48, 451, 111))


def cubrir(foto, ancho, alto):
    """Escala la foto para cubrir ancho x alto y recorta el sobrante al centro."""
    k = max(ancho / foto.width, alto / foto.height)
    foto = foto.resize((round(foto.width * k), round(foto.height * k)), Image.LANCZOS)
    x, y = (foto.width - ancho) // 2, (foto.height - alto) // 2
    return foto.crop((x, y, x + ancho, y + alto))


def armar(nombre, y_foto, alto_foto, paneles, etiquetas):
    """paneles: lista de (archivo original, x inicial, ancho) de izquierda a derecha."""
    ruta = IMG / nombre
    base = Image.open(ruta).convert("RGB")
    lienzo = base.copy()
    for archivo, x, ancho in paneles:
        foto = Image.open(ORIGINALES / archivo).convert("RGB")
        lienzo.paste(cubrir(foto, ancho, alto_foto), (x, y_foto))
    for caja in etiquetas:  # las etiquetas van por encima de la foto
        lienzo.paste(base.crop(caja), caja[:2])
    lienzo.save(ruta, "JPEG", quality=92, optimize=True)
    print(f"OK: {nombre}")


armar(
    "dig-banner-mueblin.jpg",
    y_foto=44,
    alto_foto=963,
    paneles=[("mueblin-laptop.jpg", 0, 1445), ("mueblin-celu.jpg", 1445, 875)],
    etiquetas=ETIQUETAS_MUEBLIN,
)
armar(
    "dig-banner-comardex.jpg",
    y_foto=46,
    alto_foto=963,
    paneles=[("comardex.jpg", 0, 2320)],
    etiquetas=ETIQUETAS_COMARDEX,
)
