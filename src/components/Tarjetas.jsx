import { useRef, useState } from 'react'
import TarjetaProyecto from './TarjetaProyecto.jsx'
import { useIdioma } from '../idioma.jsx'

// Posición relativa de cada tarjeta respecto de la activa, en el rango [-n/2, n/2).
const relativa = (i, activa, n) => ((((i - activa) % n) + n + n / 2) % n) - n / 2

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

// Tarjetas de proyectos: en pantallas anchas, la fila de siempre (se agranda la que está bajo el mouse); en
// celular, un carrusel como el de "Entre palabras": una tarjeta al centro, las vecinas asomando a los
// costados, flechas redondas y puntitos. Es circular y se mueve con las flechas, con un deslizamiento o
// tocando una vecina. Cada item: { to, imagen, nombre, posicion }.
export default function Tarjetas({ items, clase = '' }) {
  const { t } = useIdioma()
  const n = items.length
  const [activa, setActiva] = useState(0)
  const inicio = useRef(null)
  const arrastro = useRef(false)

  const ir = (delta) => setActiva((a) => (a + delta + n) % n)

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
    <>
      <div className={`tarjetas ${clase}`}>
        {items.map((it) => (
          <TarjetaProyecto key={it.to} {...it} />
        ))}
      </div>

      <div
        className="carrusel-tarjetas"
        role="region"
        aria-roledescription={t('carrusel', 'carousel')}
        aria-label={t('Proyectos', 'Projects')}
        tabIndex={0}
        onKeyDown={alTeclear}
        onPointerDown={alPresionar}
        onPointerUp={alSoltar}
        onPointerCancel={() => (inicio.current = null)}
      >
        {items.map((it, i) => {
          const rel = relativa(i, activa, n)
          const pos = rel === 0 ? 'centro' : rel === -1 ? 'izq' : rel === 1 ? 'der' : rel < 0 ? 'fuera-izq' : 'fuera-der'
          return (
            <div
              key={it.to}
              className={`carrusel-tarjetas__item carrusel-tarjetas__item--${pos}`}
              aria-hidden={rel !== 0}
              onClickCapture={(e) => {
                // Una vecina no navega: pasa al centro. Tampoco navega un clic que terminó un deslizamiento.
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
              <TarjetaProyecto {...it} tabIndex={rel === 0 ? undefined : -1} />
            </div>
          )
        })}
        <div className="carrusel-tarjetas__puntos">
          {items.map((it, i) => (
            <button
              key={it.to}
              type="button"
              className={i === activa ? 'activo' : ''}
              onClick={() => setActiva(i)}
              aria-label={t(`Ir a ${it.nombre}`, `Go to ${it.nombre}`)}
              aria-current={i === activa}
            />
          ))}
        </div>
        <Flecha lado="izq" onClick={() => ir(-1)} />
        <Flecha lado="der" onClick={() => ir(1)} />
      </div>
    </>
  )
}
