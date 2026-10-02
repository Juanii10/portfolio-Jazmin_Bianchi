import { useRef, useState } from 'react'

// Slider de "Entre palabras": una foto grande al centro (borde rosa) y las vecinas asomando
// a los costados. Es circular: después de la última vuelve a la primera.
// Las fotos están en public/img/exp/slide-NN.jpg (se exportan del zip original, 1600 px de ancho).
const FOTOS = [
  'Letras recortadas en negro que forman una composición en diagonal',
  'Letras recortadas y la palabra «imaginarias» partida en franjas',
  'Letras recortadas de «imaginarias» dispersas sobre el papel',
  'Las palabras «misterioso» y «pie» pintadas con pincel y tinta negra',
  'Trazos de pincel con tinta negra sobre papel',
  'Las palabras «misterio» y «pie» con trazos de pintura negra',
  'Letras góticas de la palabra «complejo» sobre papel blanco',
  'Collage de recortes de letras y texturas con la palabra «sentido»',
  'Palabras escritas con fibras de colores: «misterio», «sentido», «estatua» y «pie»',
  'La palabra «sentido» armada con tiras de papel violeta',
].map((alt, i) => ({ alt, src: `img/exp/slide-${String(i + 1).padStart(2, '0')}.jpg` }))

const N = FOTOS.length

// Posición relativa de cada foto respecto de la activa, en el rango [-N/2, N/2).
const relativa = (i, activa) => ((((i - activa) % N) + N + N / 2) % N) - N / 2

function Flecha({ lado, onClick }) {
  return (
    <button
      type="button"
      className={`exp-slider__flecha exp-slider__flecha--${lado}`}
      onClick={onClick}
      aria-label={lado === 'izq' ? 'Foto anterior' : 'Foto siguiente'}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d={lado === 'izq' ? 'M15 3 6 12l9 9' : 'm9 3 9 9-9 9'} />
      </svg>
    </button>
  )
}

export default function SliderExperimentacion() {
  const [activa, setActiva] = useState(0)
  const inicio = useRef(null)

  const ir = (delta) => setActiva((a) => (a + delta + N) % N)

  const alPresionar = (e) => {
    inicio.current = e.clientX
  }
  const alSoltar = (e) => {
    if (inicio.current === null) return
    const dx = e.clientX - inicio.current
    inicio.current = null
    if (Math.abs(dx) > 50) ir(dx < 0 ? 1 : -1)
  }
  const alTeclear = (e) => {
    if (e.key === 'ArrowLeft') ir(-1)
    if (e.key === 'ArrowRight') ir(1)
  }

  return (
    <div
      className="exp-slider"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Composiciones con palabras"
      tabIndex={0}
      onKeyDown={alTeclear}
      onPointerDown={alPresionar}
      onPointerUp={alSoltar}
      onPointerCancel={() => (inicio.current = null)}
    >
      {FOTOS.map((f, i) => {
        const rel = relativa(i, activa)
        const pos = rel === 0 ? 'centro' : rel === -1 ? 'izq' : rel === 1 ? 'der' : rel < 0 ? 'fuera-izq' : 'fuera-der'
        return (
          <figure
            key={f.src}
            className={`exp-slider__foto exp-slider__foto--${pos}`}
            aria-hidden={rel !== 0}
            aria-label={`Foto ${i + 1} de ${N}`}
            onClick={rel === -1 || rel === 1 ? () => ir(rel) : undefined}
          >
            <img
              src={`${import.meta.env.BASE_URL}${f.src}`}
              alt={rel === 0 ? f.alt : ''}
              loading={Math.abs(rel) <= 1 ? 'eager' : 'lazy'}
              decoding="async"
              draggable="false"
            />
          </figure>
        )
      })}
      <div className="exp-slider__puntos">
        {FOTOS.map((f, i) => (
          <button
            key={f.src}
            type="button"
            className={i === activa ? 'activo' : ''}
            onClick={() => setActiva(i)}
            aria-label={`Ir a la foto ${i + 1}`}
            aria-current={i === activa}
          />
        ))}
      </div>
      <Flecha lado="izq" onClick={() => ir(-1)} />
      <Flecha lado="der" onClick={() => ir(1)} />
    </div>
  )
}
