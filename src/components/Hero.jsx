import Img from './Img.jsx'
import sizes from '../images.json'
import { useIdioma } from '../idioma.jsx'

// Hero de cada proyecto: la composición (fotos + título) viene del diseño como imagen,
// el <h1> real queda oculto visualmente para accesibilidad y SEO.
// `flecha` ubica el botón de "bajar" del diseño: [x, y] en % del hero.
// `enlaces` convierte en links reales los botones dibujados en la imagen: cada uno es
// { etiqueta, href, caja: [x0, y0, x1, y1] } con la caja en píxeles de la imagen original.
export default function Hero({ imagen, titulo, flecha, enlaces = [], destino = '#contenido' }) {
  const { w, h } = sizes[imagen] ?? {}
  const { t } = useIdioma()
  return (
    <section className="hero">
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
    </section>
  )
}
