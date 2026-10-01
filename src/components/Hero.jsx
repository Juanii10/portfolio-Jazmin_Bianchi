import Img from './Img.jsx'

// Hero de cada proyecto: la composición (fotos + título) viene del diseño como imagen,
// el <h1> real queda oculto visualmente para accesibilidad y SEO.
// `flecha` ubica el botón de "bajar" del diseño: [x, y] en % del hero.
export default function Hero({ imagen, titulo, flecha, destino = '#contenido' }) {
  return (
    <section className="hero">
      <Img name={imagen} alt="" eager />
      <h1 className="sr-only">{titulo}</h1>
      {flecha && (
        <a
          className="hero__flecha"
          href={destino}
          aria-label="Ir al contenido"
          style={{ left: `${flecha[0]}%`, top: `${flecha[1]}%` }}
        />
      )}
    </section>
  )
}
