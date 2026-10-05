import { useRef, useState } from 'react'
import { useIdioma } from '../idioma.jsx'

// Slider de "Entre palabras": una foto grande al centro (borde rosa) y las vecinas asomando
// a los costados. Es circular: después de la última vuelve a la primera.
// Las fotos están en public/img/exp/slide-NN.jpg (1600 px de ancho), exportadas de la carpeta FOTOS del Drive.
const FOTOS = [
  ['Letras recortadas en negro que forman una composición en diagonal', 'Black cut-out letters forming a diagonal composition'],
  ['Letras recortadas y la palabra «imaginarias» partida en franjas', 'Cut-out letters and the word “imaginarias” split into strips'],
  ['La palabra «imaginaria» con letras recortadas dispuestas en curva', 'The word “imaginaria” in cut-out letters arranged in a curve'],
  ['Las palabras «misterioso» y «pie» pintadas con pincel y tinta negra', 'The words “misterioso” and “pie” painted with a brush and black ink'],
  ['La palabra «misterio» con trazos de pintura negra', 'The word “misterio” in black paint strokes'],
  ['Letras góticas de la palabra «complejo»', 'Gothic letters spelling the word “complejo”'],
  ['Collage de recortes de letras y texturas', 'Collage of cut-out letters and textures'],
  ['Palabras escritas con fibras de colores: «misterio», «sentido» y «estatua»', 'Words written with colored markers: “misterio”, “sentido” and “estatua”'],
  ['La palabra «sentido» armada con tiras de papel violeta', 'The word “sentido” built from strips of violet paper'],
].map(([es, en], i) => ({ es, en, src: `img/exp/slide-${String(i + 1).padStart(2, '0')}.jpg` }))

const N = FOTOS.length

// Posición relativa de cada foto respecto de la activa, en el rango [-N/2, N/2).
const relativa = (i, activa) => ((((i - activa) % N) + N + N / 2) % N) - N / 2

function Flecha({ lado, onClick }) {
  const { t } = useIdioma()
  return (
    <button
      type="button"
      className={`exp-slider__flecha exp-slider__flecha--${lado}`}
      onClick={onClick}
      aria-label={lado === 'izq' ? t('Foto anterior', 'Previous photo') : t('Foto siguiente', 'Next photo')}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d={lado === 'izq' ? 'M15 3 6 12l9 9' : 'm9 3 9 9-9 9'} />
      </svg>
    </button>
  )
}

export default function SliderExperimentacion() {
  const { t } = useIdioma()
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
      aria-roledescription={t('carrusel', 'carousel')}
      aria-label={t('Composiciones con palabras', 'Compositions with words')}
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
            aria-label={t(`Foto ${i + 1} de ${N}`, `Photo ${i + 1} of ${N}`)}
            onClick={rel === -1 || rel === 1 ? () => ir(rel) : undefined}
          >
            <img
              src={`${import.meta.env.BASE_URL}${f.src}`}
              alt={rel === 0 ? t(f.es, f.en) : ''}
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
            aria-label={t(`Ir a la foto ${i + 1}`, `Go to photo ${i + 1}`)}
            aria-current={i === activa}
          />
        ))}
      </div>
      <Flecha lado="izq" onClick={() => ir(-1)} />
      <Flecha lado="der" onClick={() => ir(1)} />
    </div>
  )
}
