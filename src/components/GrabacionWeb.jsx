import { useEffect, useRef } from 'react'

// Grabaciones de pantalla de un sitio dentro de una computadora y un celular dibujados en CSS (el celular
// con el mismo marco que los reels): la versión web en la computadora y la mobile en el celular
// (public/video/web/<clave>.mp4 y <clave>-mobile.mp4, con su .jpg de portada). Arrancan en pausa: se
// les da play con el botón de la pantalla (o con un clic encima); van sin sonido y en bucle, y se pausan al
// salir de pantalla.
const Boton = () => (
  <button type="button" className="gw-play" aria-label="Reproducir video">
    <span className="gw-play__icono" aria-hidden="true">
      <svg className="gw-play__ver-play" viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z" /></svg>
      <svg className="gw-play__ver-pausa" viewBox="0 0 24 24"><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>
    </span>
  </button>
)

export default function GrabacionWeb({ clave, fondo, alt }) {
  const raiz = useRef(null)
  const base = import.meta.env.BASE_URL

  useEffect(() => {
    const videos = [...raiz.current.querySelectorAll('video')]
    // Sin sonido, y en bucle salvo que se pida "reducir movimiento".
    videos.forEach((v) => {
      v.muted = true
      v.loop = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    })
    const sincronizar = (v) => v.parentElement.classList.toggle('en-pausa', v.paused)
    const botones = [...raiz.current.querySelectorAll('.gw-play')].map((b) => {
      const v = b.parentElement.querySelector('video')
      const alClick = () => {
        if (v.paused) v.play().catch(() => {})
        else v.pause()
      }
      const alCambiar = () => {
        sincronizar(v)
        b.setAttribute('aria-label', v.paused ? 'Reproducir video' : 'Pausar video')
      }
      b.addEventListener('click', alClick)
      v.addEventListener('play', alCambiar)
      v.addEventListener('pause', alCambiar)
      alCambiar()
      return () => {
        b.removeEventListener('click', alClick)
        v.removeEventListener('play', alCambiar)
        v.removeEventListener('pause', alCambiar)
      }
    })
    // Arrancan en pausa (se ve el primer cuadro con el botón de play); solo se pausan al salir de pantalla.
    if (!('IntersectionObserver' in window)) return () => botones.forEach((quitar) => quitar())
    const observador = new IntersectionObserver(
      (entradas) => entradas.forEach((e) => !e.isIntersecting && e.target.pause()),
      { threshold: 0.2 },
    )
    videos.forEach((v) => observador.observe(v))
    return () => {
      observador.disconnect()
      botones.forEach((quitar) => quitar())
    }
  }, [])

  return (
    <div
      className="grabacion-web"
      ref={raiz}
      role="group"
      aria-label={alt}
      style={{ backgroundImage: `url(${base}img/${fondo}.jpg)` }}
    >
      <div className="grabacion-web__escena">
        <div className="compu">
          <div className="compu__marco">
            <div className="compu__pantalla">
              <video
                src={`${base}video/web/${clave}.mp4`}
                poster={`${base}video/web/${clave}.jpg`}
                muted
                playsInline
                preload="metadata"
              />
              <Boton />
            </div>
            <span className="compu__camara" />
          </div>
          <div className="compu__cuello" />
          <div className="compu__base" />
        </div>

        <div className="celu">
          <div className="celu__pantalla">
            <video
              src={`${base}video/web/${clave}-mobile.mp4`}
              poster={`${base}video/web/${clave}-mobile.jpg`}
              muted
              playsInline
              preload="metadata"
            />
            <Boton />
            <span className="celu__isla" />
          </div>
        </div>
      </div>
    </div>
  )
}
