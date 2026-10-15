import { useRef, useState } from 'react'
import { useIdioma } from '../idioma.jsx'

// Posición relativa de cada elemento respecto del activo, en el rango [-n/2, n/2).
const relativa = (i, activo, n) => ((((i - activo) % n) + n + n / 2) % n) - n / 2

function Flecha({ lado, onClick }) {
  const { t } = useIdioma()
  return (
    <button
      type="button"
      className={`carrusel-tarjetas__flecha carrusel-tarjetas__flecha--${lado}`}
      onClick={onClick}
      aria-label={lado === 'izq' ? t('Anterior', 'Previous') : t('Siguiente', 'Next')}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d={lado === 'izq' ? 'M15 3 6 12l9 9' : 'm9 3 9 9-9 9'} />
      </svg>
    </button>
  )
}

// Carrusel circular de un elemento al centro con los vecinos asomando a los costados, flechas redondas y
// puntitos. Se mueve con las flechas, con un deslizamiento o tocando un vecino. Solo se ve en celular (ver
// .carrusel-tarjetas en styles.css). `render(item)` dibuja el contenido de cada elemento; `nombre(item)` es el
// texto accesible de cada puntito; `clase` agrega un modificador (p. ej. para cambiar el tamaño).
export default function Carrusel({ items, render, nombre, etiqueta, clase = '' }) {
  const { t } = useIdioma()
  const n = items.length
  const [activo, setActivo] = useState(0)
  const inicio = useRef(null)
  const arrastro = useRef(false)

  const ir = (delta) => setActivo((a) => (a + delta + n) % n)

  const alPresionar = (e) => {
    inicio.current = e.clientX
    arrastro.current = false
  }
  const alSoltar = (e) => {
    if (inicio.current === null) return
    const dx = e.clientX - inicio.current
    inicio.current = null
    if (Math.abs(dx) > 40) {
      arrastro.current = true
      ir(dx < 0 ? 1 : -1)
    }
  }
  const alTeclear = (e) => {
    if (e.key === 'ArrowLeft') ir(-1)
    if (e.key === 'ArrowRight') ir(1)
  }

  return (
    <div
      className={`carrusel-tarjetas ${clase}`}
      role="region"
      aria-roledescription={t('carrusel', 'carousel')}
      aria-label={etiqueta}
      tabIndex={0}
      onKeyDown={alTeclear}
      onPointerDown={alPresionar}
      onPointerUp={alSoltar}
      onPointerCancel={() => (inicio.current = null)}
    >
      {items.map((it, i) => {
        const rel = relativa(i, activo, n)
        const pos = rel === 0 ? 'centro' : rel === -1 ? 'izq' : rel === 1 ? 'der' : rel < 0 ? 'fuera-izq' : 'fuera-der'
        return (
          <div
            key={nombre(it, i)}
            className={`carrusel-tarjetas__item carrusel-tarjetas__item--${pos}`}
            aria-hidden={rel !== 0}
            onClickCapture={(e) => {
              // Un vecino no navega: pasa al centro. Tampoco navega un clic que terminó un deslizamiento.
              if (rel !== 0) {
                e.preventDefault()
                e.stopPropagation()
                if (rel === -1 || rel === 1) ir(rel)
              } else if (arrastro.current) {
                e.preventDefault()
                e.stopPropagation()
                arrastro.current = false
              }
            }}
          >
            {render(it, rel)}
          </div>
        )
      })}
      <div className="carrusel-tarjetas__puntos">
        {items.map((it, i) => (
          <button
            key={nombre(it, i)}
            type="button"
            className={i === activo ? 'activo' : ''}
            onClick={() => setActivo(i)}
            aria-label={t(`Ir a ${nombre(it, i)}`, `Go to ${nombre(it, i)}`)}
            aria-current={i === activo}
          />
        ))}
      </div>
      <Flecha lado="izq" onClick={() => ir(-1)} />
      <Flecha lado="der" onClick={() => ir(1)} />
    </div>
  )
}
