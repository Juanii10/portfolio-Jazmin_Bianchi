import { useEffect, useRef, useState } from 'react'
import Palabras from './Palabras.jsx'
import { useIdioma } from '../idioma.jsx'
import sizes from '../images.json'

// Escenario fijo con varios afiches: la pantalla queda quieta y, al scrollear, se pasa de un afiche al
// siguiente (la página "avanza" por debajo: cada afiche ocupa una pantalla de scroll). El texto es
// chico y la imagen es la protagonista; las palabras se escriben una a una al activarse cada afiche.
//
// afiches: [{ titulo, nombre, ubicacion, objetivo, imagenes: [{ name, alt }] }]
export default function EscenarioAfiches({ fecha, afiches }) {
  const { t, fecha: traducirFecha } = useIdioma()
  const ref = useRef(null)
  const [activo, setActivo] = useState(0)
  const n = afiches.length

  useEffect(() => {
    let raf = 0
    const calcular = () => {
      const r = ref.current.getBoundingClientRect()
      const recorrido = r.height - window.innerHeight
      const p = recorrido > 0 ? Math.min(Math.max(-r.top / recorrido, 0), 0.9999) : 0
      setActivo(Math.min(n - 1, Math.floor(p * n)))
    }
    const alScrollear = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(calcular)
    }
    calcular()
    window.addEventListener('scroll', alScrollear, { passive: true })
    window.addEventListener('resize', alScrollear)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', alScrollear)
      window.removeEventListener('resize', alScrollear)
    }
  }, [n])

  const irA = (i) => {
    const r = ref.current.getBoundingClientRect()
    const recorrido = r.height - window.innerHeight
    window.scrollTo({ top: window.scrollY + r.top + (recorrido * (i + 0.5)) / n, behavior: 'smooth' })
  }

  return (
    <section className="konex" ref={ref} style={{ '--n': n }}>
      <div className="konex__pin">
        <p className="konex__fecha">{traducirFecha(fecha)}</p>

        {afiches.map((a, i) => (
          <article
            key={a.titulo + a.nombre}
            className={`konex__slide ${i === activo ? 'activa' : ''}`}
            aria-hidden={i !== activo}
            aria-label={`${a.titulo}: ${a.nombre}`}
          >
            <div className="konex__texto">
              <h2 className="proyecto__titulo">[[ {a.titulo}</h2>
              <p className="proyecto__cliente">{a.nombre}</p>
              <p className="afiche__ubicacion">
                <Palabras>
                  <strong>{t('Ubicación:', 'Location:')}</strong> {a.ubicacion}
                </Palabras>
              </p>
              <p className="afiche__objetivo">
                <Palabras desde={4}>{a.objetivo}</Palabras>
              </p>
            </div>
            <div className="konex__imgs">
              {a.imagenes.map(({ name, alt }) => {
                const { w, h } = sizes[name]
                return (
                  <img
                    key={name}
                    src={`${import.meta.env.BASE_URL}img/${name}.jpg`}
                    width={w}
                    height={h}
                    alt={alt}
                    // Las imágenes apiladas reparten el alto en proporción inversa a su relación de aspecto
                    // para terminar todas con el mismo ancho.
                    style={{ '--g': h / w }}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                )
              })}
            </div>
          </article>
        ))}

        <div className="konex__indice" role="tablist" aria-label={t('Afiches', 'Posters')}>
          {afiches.map((a, i) => (
            <button
              key={a.titulo + a.nombre}
              type="button"
              role="tab"
              aria-selected={i === activo}
              aria-label={t(`Ir al ${a.titulo}: ${a.nombre}`, `Go to ${a.titulo}: ${a.nombre}`)}
              className={i === activo ? 'activo' : ''}
              onClick={() => irA(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
