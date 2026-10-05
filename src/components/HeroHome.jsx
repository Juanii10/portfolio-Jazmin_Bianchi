import { useIdioma } from '../idioma.jsx'

// Composición del hero del home, armada con capas reales (fotos + nombre) para poder animarlas.
// Las medidas (en "u", ver vite.config.js) salen del diseño y viven en el CSS (.foto--*).
// Orden de capas: nombre relleno < fotos < nombre en contorno. Así el nombre queda lleno sobre
// el fondo y solo en contorno donde pasa por encima de una foto (todas, también la de "Ja").
// `retraso`: segundos hasta que la foto "aparece" (con un fundido corto), en orden salteado.
const FOTOS = [
  { id: 'camino', retraso: 0.8, archivo: 'infancia-camino', alt: ['Jazmín de chiquita en el jardín', 'Jazmín as a child in the garden'] },
  { id: 'mariposa', retraso: 0.25, archivo: 'mariposa', alt: ['Jazmín frente a un mural de mariposa', 'Jazmín in front of a butterfly mural'] },
  { id: 'uade', retraso: 1.35, archivo: 'uade', alt: ['Jazmín en la UADE', 'Jazmín at UADE'], etiqueta: ['Portfolio 2026', 'Portfolio 2026'] },
  { id: 'tortuga', retraso: 1.6, archivo: 'tortuga', alt: ['Jazmín de chiquita con una tortuga', 'Jazmín as a child with a tortoise'], etiqueta: ['Diseño Gráfico', 'Graphic Design'] },
  { id: 'nieve', retraso: 0.5, archivo: 'nieve', alt: ['Jazmín en la nieve', 'Jazmín in the snow'] },
  { id: 'retrato', retraso: 1.05, archivo: 'retrato', alt: ['Retrato de Jazmín', 'Portrait of Jazmín'] },
]

function Nombre({ contorno }) {
  return (
    <div className={`hero-nombre ${contorno ? 'hero-nombre--contorno' : ''}`} aria-hidden="true">
      <span className="hero-nombre__linea hero-nombre__linea--1">Jazmín</span>
      <span className="hero-nombre__linea hero-nombre__linea--2">Bianchi</span>
    </div>
  )
}

export default function HeroHome() {
  const { t } = useIdioma()
  return (
    <section className="home-hero">
      <h1 className="sr-only">{t('Jazmín Bianchi, diseño gráfico. Portfolio 2026', 'Jazmín Bianchi, graphic design. Portfolio 2026')}</h1>
      <Nombre />
      {FOTOS.map((f) => (
        <figure
          key={f.id}
          className={`foto foto--${f.id}`}
          style={{ '--retraso': `${f.retraso}s` }}
        >
          <div className="foto__marco">
            <img
              src={`${import.meta.env.BASE_URL}img/hero/${f.archivo}.jpg`}
              alt={t(...f.alt)}
              loading="eager"
              decoding="async"
              draggable="false"
            />
          </div>
          {f.etiqueta && <figcaption className="foto__etiqueta">{t(...f.etiqueta)}</figcaption>}
        </figure>
      ))}
      <Nombre contorno />
    </section>
  )
}
