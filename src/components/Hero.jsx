import Img from './Img.jsx'
import sizes from '../images.json'
import { useIdioma } from '../idioma.jsx'

// Hero de cada proyecto. Hay dos versiones de la portada: la ancha de escritorio y la vertical de celular (`movil`).
// En las dos el título, el subtítulo y los botones son texto real sobre una imagen sin letras, así se traducen
// (ver Capa). Si una portada no tiene su imagen limpia todavía, se usa la ancha del diseño con las letras dibujadas
// y el <h1> real queda oculto visualmente para accesibilidad y SEO.
// El lienzo agrupa la imagen y lo que se superpone, así las posiciones en % siguen siendo las de la imagen
// en cualquier ancho.
// `flecha` ubica el botón de "bajar" de la imagen ancha: [x, y] en % del hero.
// `enlaces` convierte en links reales los botones dibujados en la imagen ancha con letras: cada uno es
// { etiqueta, href, caja: [x0, y0, x1, y1] } con la caja en píxeles de la imagen original.
//
// `movil` y `escritorio` (portada con texto real) llevan: imagen, titulo [[es, en], ...], sub [es, en], caja del texto
// [x0, y0, x1, y1], tam y tamSub (px de la imagen), tamEnlace, enlaces [{ href, etiqueta: [es, en], caja }] y
// flecha ([x, y, diámetro] en la móvil). Todas las medidas son píxeles de la imagen que se usa.
function Capa({ cfg, destino, claseFlecha, flechaPx }) {
  const { t } = useIdioma()
  const { w: W, h: H } = sizes[cfg.imagen]
  const caja = ([x0, y0, x1, y1]) => ({
    left: `${(x0 / W) * 100}%`,
    top: `${(y0 / H) * 100}%`,
    width: `${((x1 - x0) / W) * 100}%`,
    height: `${((y1 - y0) / H) * 100}%`,
  })
  return (
    <>
      <div className="hero__movil-texto" style={caja(cfg.caja)}>
        <p className="hero__movil-titulo" style={{ fontSize: `${(cfg.tam / W) * 100}cqw` }}>
          {cfg.titulo.map(([es, en], i) => (
            <span key={i}>{t(es, en)}</span>
          ))}
        </p>
        <p
          className="hero__movil-sub"
          style={{ fontSize: `${((cfg.tamSub ?? cfg.tam * 0.27) / W) * 100}cqw`, ...(cfg.subNegro && { color: '#111' }) }}
        >
          {t(...cfg.sub)}
        </p>
      </div>
      {(cfg.enlaces ?? []).map(({ href, etiqueta, caja: c }) => (
        <a
          key={href}
          className="hero__movil-enlace"
          href={href}
          style={{ ...caja(c), fontSize: `${((cfg.tamEnlace ?? 26) / W) * 100}cqw` }}
        >
          {t(...etiqueta)}
        </a>
      ))}
      {flechaPx && (
        <a
          className={claseFlecha}
          href={destino}
          aria-label={t('Ir al contenido', 'Go to content')}
          style={{
            left: `${(flechaPx[0] / W) * 100}%`,
            top: `${(flechaPx[1] / H) * 100}%`,
            width: `${(flechaPx[2] / W) * 100}%`,
          }}
        />
      )}
    </>
  )
}

export default function Hero({ imagen, titulo, flecha, enlaces = [], destino = '#contenido', movil, escritorio }) {
  const { w, h } = sizes[imagen] ?? {}
  const { t } = useIdioma()
  return (
    <section className="hero">
      <div className="hero__lienzo">
        {escritorio ? <Img name={escritorio.imagen} alt="" eager /> : <Img name={imagen} alt="" eager />}
        <h1 className="sr-only">{titulo}</h1>
        {escritorio ? (
          <Capa cfg={escritorio} destino={destino} claseFlecha="hero__movil-flecha hero__movil-flecha--pc" flechaPx={escritorio.flecha} />
        ) : (
          enlaces.map(({ etiqueta, href, caja: [x0, y0, x1, y1] }) => (
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
          ))
        )}
        {!escritorio && flecha && (
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
          <Capa cfg={movil} destino={destino} claseFlecha="hero__movil-flecha" flechaPx={movil.flecha} />
        </div>
      )}
    </section>
  )
}
