import Img from './Img.jsx'
import sizes from '../images.json'
import { useIdioma } from '../idioma.jsx'

// Hero de cada proyecto: la composición (fotos + título) viene del diseño como imagen,
// el <h1> real queda oculto visualmente para accesibilidad y SEO.
// El lienzo agrupa la imagen y lo que se superpone, así las posiciones en % siguen siendo las de la imagen
// en cualquier ancho. En celular se muestra, en su lugar, la portada vertical `movil` con el título como texto real.
// `flecha` ubica el botón de "bajar" del diseño: [x, y] en % del hero.
// `enlaces` convierte en links reales los botones dibujados en la imagen: cada uno es
// { etiqueta, href, caja: [x0, y0, x1, y1] } con la caja en píxeles de la imagen original.
export default function Hero({ imagen, titulo, flecha, enlaces = [], destino = '#contenido', movil }) {
  const { w, h } = sizes[imagen] ?? {}
  const { t } = useIdioma()
  const W = movil ? sizes[movil.imagen].w : 1
  const H = movil ? sizes[movil.imagen].h : 1
  const caja = ([x0, y0, x1, y1]) => ({
    left: `${(x0 / W) * 100}%`,
    top: `${(y0 / H) * 100}%`,
    width: `${((x1 - x0) / W) * 100}%`,
    height: `${((y1 - y0) / H) * 100}%`,
  })
  return (
    <section className="hero">
      <div className="hero__lienzo">
        <Img name={imagen} alt="" eager />
        <h1 className="sr-only">{titulo}</h1>
        {enlaces.map(({ etiqueta, href, caja: [x0, y0, x1, y1] }) => (
          <a
            key={href}
            className="hero__enlace"
            href={href}
            style={{
              left: `${(x0 / w) * 100}%`,
              top: `${(y0 / h) * 100}%`,
              width: `${((x1 - x0) / w) * 100}%`,
              height: `${((y1 - y0) / h) * 100}%`,
            }}
          >
            <span className="sr-only">{etiqueta}</span>
          </a>
        ))}
        {flecha && (
          <a
            className="hero__flecha"
            href={destino}
            aria-label={t('Ir al contenido', 'Go to content')}
            style={{ left: `${flecha[0]}%`, top: `${flecha[1]}%` }}
          />
        )}
      </div>

      {movil && (
        <div className="hero__movil">
          <Img name={movil.imagen} alt="" eager />
          <div className="hero__movil-texto" style={caja(movil.caja)}>
            <p className="hero__movil-titulo" style={{ fontSize: `${(movil.tam / W) * 100}cqw` }}>
              {movil.titulo.map(([es, en], i) => (
                <span key={i}>{t(es, en)}</span>
              ))}
            </p>
            <p className="hero__movil-sub" style={{ fontSize: `${((movil.tamSub ?? movil.tam * 0.27) / W) * 100}cqw`, ...(movil.subNegro && { color: '#111' }) }}>
              {t(...movil.sub)}
            </p>
          </div>
          {(movil.enlaces ?? []).map(({ href, etiqueta, caja: c }) => (
            <a key={href} className="hero__movil-enlace" href={href} style={{ ...caja(c), fontSize: `${(26 / W) * 100}cqw` }}>
              {t(...etiqueta)}
            </a>
          ))}
          <a
            className="hero__movil-flecha"
            href={destino}
            aria-label={t('Ir al contenido', 'Go to content')}
            style={{
              left: `${(movil.flecha[0] / W) * 100}%`,
              top: `${(movil.flecha[1] / H) * 100}%`,
              width: `${(movil.flecha[2] / W) * 100}%`,
            }}
          />
        </div>
      )}
    </section>
  )
}
