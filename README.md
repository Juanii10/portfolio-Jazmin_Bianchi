# Portfolio — Jazmín Bianchi

Sitio React + Vite + React Router, construido a partir de los exports del diseño (`PORTFOLIO JAZMIN BIANCHI.zip`).

```bash
npm install
npm run dev      # desarrollo
npm run build    # producción en /dist
```

## Rutas
`/` · `/papeleria` · `/experimentacion` · `/diseno-digital` · `/posters` · `/posters/konex` · `/posters/borges` · `/posters/las-bestias`

## Imágenes
El diseño se entregó como PNG planos, así que las imágenes se **recortan** de esos exports:
`tools/crops.json` define cada recorte y `npm run imagenes` los regenera en `public/img/` (los PNG originales van en `_referencia/`, que no se versiona).

Después de regenerar, correr `python tools/alinear_iconos.py` para volver a alinear la grilla de íconos del UI Kit (`dig-uikit.jpg`), que en el diseño original está desprolija. Y `python tools/armar_banners.py` para rearmar los dos banners web de Diseño digital (`dig-banner-mueblin.jpg` y `dig-banner-comardex.jpg`) con las fotos originales de `tools/originales/`: el diseño las trae con flechas de carrusel pegadas en la imagen.
Cuando haya fotos originales, se reemplaza el JPG correspondiente en `public/img/` con el mismo nombre.

## Escala
Las medidas del CSS usan la unidad `u` (1u = 1px del frame de 1274px del diseño), que escala con el ancho de la página. Ver `vite.config.js`.
