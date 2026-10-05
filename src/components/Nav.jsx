import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const PROYECTOS = [
  { to: '/papeleria', nombre: 'Papelería' },
  { to: '/experimentacion', nombre: 'Experimentación' },
  { to: '/diseno-digital', nombre: 'Diseño digital' },
  { to: '/posters', nombre: 'Posters' },
]

// "Proyectos" abre un desplegable para ir directo a cualquier proyecto desde cualquier página.
// Se abre con clic o con el mouse encima (solo en dispositivos con mouse) y se cierra con Esc, con un
// clic afuera o al elegir una opción. Con el teclado: Enter/Espacio o flecha abajo lo abren.
function MenuProyectos() {
  const [abierto, setAbierto] = useState(false)
  const raiz = useRef(null)
  const cierre = useRef(0)
  const { pathname } = useLocation()

  // Al cambiar de página se cierra.
  useEffect(() => setAbierto(false), [pathname])

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

  useEffect(() => () => clearTimeout(cierre.current), [])

  const conMouse = () => window.matchMedia('(hover: hover)').matches
  const alEntrar = () => {
    if (!conMouse()) return
    clearTimeout(cierre.current)
    setAbierto(true)
  }
  const alSalir = () => {
    if (!conMouse()) return
    clearTimeout(cierre.current)
    cierre.current = setTimeout(() => setAbierto(false), 180)
  }
  const alTeclear = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setAbierto(true)
      requestAnimationFrame(() => raiz.current?.querySelector('.nav__menu a')?.focus())
    }
  }

  return (
    <div className="nav__item" ref={raiz} onMouseEnter={alEntrar} onMouseLeave={alSalir}>
      <button
        type="button"
        className={`nav__proyectos ${abierto ? 'abierto' : ''}`}
        aria-expanded={abierto}
        aria-haspopup="true"
        aria-controls="menu-proyectos"
        onClick={() => setAbierto((a) => !a)}
        onKeyDown={alTeclear}
      >
        Proyectos
        <svg viewBox="0 0 12 8" aria-hidden="true">
          <path d="m1 1.5 5 5 5-5" />
        </svg>
      </button>

      {abierto && (
        <ul className="nav__menu" id="menu-proyectos">
          <li>
            <Link to="/#proyectos" className="nav__menu-todos">
              Ver todos
            </Link>
          </li>
          {PROYECTOS.map(({ to, nombre }) => (
            <li key={to}>
              <Link to={to} aria-current={pathname.startsWith(to) ? 'page' : undefined}>
                {nombre}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Nav({ conContacto = true, compacto = false }) {
  return (
    <header className={compacto ? 'nav nav--compacto' : 'nav'}>
      <nav className="nav__links" aria-label="Principal">
        <Link to="/">Inicio</Link>
        <Link to="/#sobre-jaz">Sobre Jaz</Link>
        <MenuProyectos />
        {conContacto && <a href="#contacto">Contacto</a>}
      </nav>
      <button className="nav__lang" type="button" lang="es" title="Idioma">
        Español
      </button>
    </header>
  )
}
