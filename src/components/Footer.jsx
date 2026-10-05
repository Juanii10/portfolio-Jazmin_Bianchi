import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Telefono = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
  </svg>
)
const Mail = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5zm2.2.5L12 12.2 18.8 7zm13.8 2.3-7 5.3-7-5.3V17h14z" />
  </svg>
)
const Pin = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
)

export function Icono({ children, texto }) {
  return <span className="icono">{texto ?? children}</span>
}

const CORREO = 'jachubianchi@outlook.com'
const ASUNTO = 'Hola Jazmín'
const enCodigo = encodeURIComponent

// Mail de contacto: abre la app de correo (mailto:) con el destinatario y un asunto. Si el navegador no
// tiene ninguna app de correo configurada no pasa nada, así que, si en 1 segundo la página no perdió el foco
// (señal de que se abrió otra app), se ofrece escribir desde Gmail u Outlook en la web, o copiar la dirección.
function EnlaceCorreo() {
  const [abierto, setAbierto] = useState(false)
  const [copiado, setCopiado] = useState(false)
  const raiz = useRef(null)
  const timer = useRef(0)

  const alTocar = () => {
    let cambio = false
    const marcar = () => (cambio = true)
    window.addEventListener('blur', marcar, { once: true })
    document.addEventListener('visibilitychange', marcar, { once: true })
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      window.removeEventListener('blur', marcar)
      document.removeEventListener('visibilitychange', marcar)
      if (!cambio) setAbierto(true)
    }, 1000)
  }

  useEffect(() => {
    if (!abierto) return
    const cerrar = (e) => {
      if (e.type === 'keydown' ? e.key === 'Escape' : !raiz.current?.contains(e.target)) setAbierto(false)
    }
    document.addEventListener('mousedown', cerrar)
    document.addEventListener('keydown', cerrar)
    return () => {
      document.removeEventListener('mousedown', cerrar)
      document.removeEventListener('keydown', cerrar)
    }
  }, [abierto])

  useEffect(() => () => clearTimeout(timer.current), [])

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(CORREO)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      window.prompt('Copiá la dirección:', CORREO)
    }
  }

  return (
    <li className="contacto__correo" ref={raiz}>
      <a href={`mailto:${CORREO}?subject=${enCodigo(ASUNTO)}`} onClick={alTocar}>
        <Icono><Mail /></Icono>
        {CORREO}
      </a>
      {abierto && (
        <div className="correo-menu" role="group" aria-label="Escribir un mail">
          <p>No se abrió tu app de correo. Escribile desde:</p>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CORREO}&su=${enCodigo(ASUNTO)}`}
            target="_blank"
            rel="noreferrer"
          >
            Gmail
          </a>
          <a
            href={`https://outlook.live.com/mail/0/deeplink/compose?to=${CORREO}&subject=${enCodigo(ASUNTO)}`}
            target="_blank"
            rel="noreferrer"
          >
            Outlook
          </a>
          <button type="button" onClick={copiar}>
            {copiado ? '¡Dirección copiada!' : 'Copiar la dirección'}
          </button>
        </div>
      )}
    </li>
  )
}

export function Contacto() {
  return (
    <ul className="contacto-lista">
      <li>
        <a href="tel:+541171511846">
          <Icono><Telefono /></Icono>
          11-7151-1846
        </a>
      </li>
      <EnlaceCorreo />
      <li>
        <span>
          <Icono><Pin /></Icono>
          Banfield, Lomas de Zamora
        </span>
      </li>
    </ul>
  )
}

export function Sociales() {
  return (
    <ul className="contacto-lista contacto-lista--sociales">
      <li>
        <a className="subrayado" href="https://www.linkedin.com/in/jazmin-bianchi/" target="_blank" rel="noreferrer">
          <Icono texto="in" />
          Jazmin Bianchi
        </a>
      </li>
      <li>
        <a className="subrayado" href="https://www.behance.net/jazminbianchi1" target="_blank" rel="noreferrer">
          <Icono texto="Bē" />
          Jazmin Bianchi
        </a>
      </li>
    </ul>
  )
}

export default function Footer({ negro = false }) {
  return (
    <footer className={negro ? 'footer footer--negro' : 'footer'} id="contacto">
      <div className="footer__main">
        <p className="footer__logo">
          Jazmín<br />Bianchi
        </p>
        <div className="footer__col footer__col--nav">
          <h2>Navegar</h2>
          <Link to="/">Inicio</Link>
          <Link to="/#sobre-jaz">Sobre Jaz</Link>
          <Link to="/#proyectos">Proyectos</Link>
        </div>
        <div className="footer__col footer__col--contacto">
          <h2>Contacto</h2>
          <Contacto />
        </div>
        <div className="footer__col footer__col--sociales">
          <h2>Sociales</h2>
          <Sociales />
        </div>
      </div>
      <div className="footer__bottom">
        <span>portfolio 2026</span>
        <span>diseñado por Jazmin Bianchi</span>
      </div>
    </footer>
  )
}
