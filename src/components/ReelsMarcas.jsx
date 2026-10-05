import { useEffect, useRef, useState } from 'react'
import { useIdioma } from '../idioma.jsx'

// Sección "Edición de reels": una fila de botones (píldoras) elige la marca y cambia, a la vez, el nombre,
// el texto y los celulares con sus reels. Funciona como un grupo de pestañas (clic o flechas del teclado).
//
// Dentro de cada marca, los reels van en una fila de celulares: el del centro es el activo, grande y
// reproduciéndose; los vecinos asoman a los costados, más chicos y apagados. Cuando termina el video del
// centro, pasa solo al siguiente; también se puede tocar un celular lateral para traerlo al centro.
//
// Sonido: los navegadores solo dejan reproducir solo (autoplay) un video si está silenciado, así que arranca
// sin sonido y hay un interruptor con dos parlantes (silencio / sonido) para activarlo. Una vez activado (un clic es el permiso), los reels siguientes y
// los de las otras marcas se reproducen con sonido, hasta que se lo apague.
//
// marcas: [{ nombre, fecha, reels: [{ video, poster, alt }] }]
const base = import.meta.env.BASE_URL

// Parlante de línea: con una "x" (silencio) o con ondas (sonido).
function Parlante({ ondas }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z" />
      {ondas ? (
        <>
          <path d="M15.5 9.2a4 4 0 0 1 0 5.6" />
          <path d="M18 6.8a7.5 7.5 0 0 1 0 10.4" />
        </>
      ) : (
        <path d="m16 9.5 5 5m0-5-5 5" />
      )}
    </svg>
  )
}

function Celulares({ reels, sonido, alSilenciarPorBloqueo }) {
  const { t } = useIdioma()
  const [centro, setCentro] = useState(0)
  const videos = useRef([])
  const n = reels.length
  const sinMovimiento = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  // El sonido se aplica a todos los videos (solo suena el del centro, los demás están en pausa).
  useEffect(() => {
    videos.current.forEach((v) => v && (v.muted = !sonido))
  }, [sonido, centro])

  // Solo el celular del centro se reproduce; los demás quedan quietos y vuelven al inicio.
  useEffect(() => {
    videos.current.forEach((v, i) => {
      if (!v) return
      if (i === centro) {
        v.currentTime = 0
        if (sinMovimiento.current) return
        v.play().catch(() => {
          // Si el navegador no deja reproducir con sonido, se reproduce en silencio y se avisa.
          v.muted = true
          v.play().catch(() => {})
          alSilenciarPorBloqueo?.()
        })
      } else {
        v.pause()
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [centro])

  const siguiente = () => setCentro((c) => (c + 1) % n)

  return (
    <div className="reels__fila" aria-roledescription={t('carrusel', 'carousel')} aria-label={t('Reels de la marca', 'Brand reels')}>
      {reels.map((r, i) => {
        // Posición respecto del centro: -1 (izquierda), 0 (centro), 1 (derecha); el resto queda oculto.
        const rel = ((((i - centro) % n) + n + Math.floor(n / 2)) % n) - Math.floor(n / 2)
        const pos = rel === 0 ? 'centro' : rel === -1 ? 'izq' : rel === 1 ? 'der' : 'oculto'
        return (
          <div
            key={r.video}
            className={`reel reel--${pos}`}
            aria-hidden={rel !== 0}
            onClick={rel === -1 || rel === 1 ? () => setCentro(i) : undefined}
          >
            <div className="reel__pantalla">
              <video
                ref={(el) => (videos.current[i] = el)}
                src={`${base}${r.video}`}
                poster={`${base}${r.poster}`}
                playsInline
                preload={rel === 0 ? 'auto' : 'metadata'}
                controls={sinMovimiento.current && rel === 0}
                aria-label={r.alt}
                onEnded={rel === 0 ? siguiente : undefined}
              />
              <span className="reel__isla" aria-hidden="true" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function ReelsMarcas({ titulo, marcas }) {
  const { t, fecha: traducirFecha } = useIdioma()
  const [activa, setActiva] = useState(0)
  const [sonido, setSonido] = useState(false)
  const anterior = useRef(0)
  const botones = useRef([])

  const elegir = (i) => {
    if (i === activa) return
    anterior.current = activa
    setActiva(i)
  }

  const alTeclear = (e) => {
    const n = marcas.length
    const paso = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]
    if (!paso) return
    e.preventDefault()
    const i = (activa + paso + n) % n
    elegir(i)
    botones.current[i]?.focus()
  }

  const marca = marcas[activa]
  const sentido = activa >= anterior.current ? 'der' : 'izq'

  return (
    <>
      <button
        type="button"
        role="switch"
        aria-checked={sonido}
        aria-label={t('Sonido', 'Sound')}
        className={`reels__switch ${sonido ? 'activo' : ''}`}
        onClick={() => setSonido((s) => !s)}
      >
        <span className="reels__switch-icono" aria-hidden="true">
          <Parlante ondas={false} />
        </span>
        <span className="reels__switch-icono" aria-hidden="true">
          <Parlante ondas />
        </span>
        <span className="reels__switch-perilla" aria-hidden="true" />
      </button>

      <h2 className="proyecto__titulo reels__titulo">[[ {titulo}</h2>

      <div className="reels__tabs" role="tablist" aria-label={t('Marcas', 'Brands')} onKeyDown={alTeclear}>
        {marcas.map((m, i) => (
          <button
            key={m.nombre}
            ref={(el) => (botones.current[i] = el)}
            type="button"
            role="tab"
            id={`reels-tab-${i}`}
            aria-selected={i === activa}
            aria-controls="reels-panel"
            tabIndex={i === activa ? 0 : -1}
            className={`reels__tab ${i === activa ? 'activa' : ''}`}
            onClick={() => elegir(i)}
          >
            {m.nombre}
          </button>
        ))}
      </div>

      <div key={marca.nombre} className="reels__cambio" id="reels-panel" role="tabpanel" aria-labelledby={`reels-tab-${activa}`}>
        <p className="proyecto__cliente">{marca.nombre}</p>
        {marca.fecha && <p className="proyecto__fecha">*{traducirFecha(marca.fecha)}*</p>}
      </div>

      <div className="reels__zona">
        <div key={`celus-${marca.nombre}`} className={`reels__escenario reels__escenario--${sentido}`}>
          <Celulares reels={marca.reels} sonido={sonido} alSilenciarPorBloqueo={() => setSonido(false)} />
        </div>
      </div>
    </>
  )
}
