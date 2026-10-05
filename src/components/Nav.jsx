import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useIdioma } from '../idioma.jsx'

const PROYECTOS = [
  { to: '/papeleria', es: 'Papelería', en: 'Stationery' },
  { to: '/experimentacion', es: 'Experimentación', en: 'Experimentation' },
  { to: '/diseno-digital', es: 'Diseño digital', en: 'Digital design' },
  { to: '/posters', es: 'Posters', en: 'Posters' },
]

// "Proyectos" abre un desplegable para ir directo a cualquier proyecto desde cualquier página.
// Se abre con clic o con el mouse encima (solo en dispositivos con mouse) y se cierra con Esc, con un
// clic afuera o al elegir una opción. Con el teclado: Enter/Espacio o flecha abajo lo abren.
function MenuProyectos() {
  const [abierto, setAbierto] = useState(false)
  const raiz = useRef(null)
  const cierre = useRef(0)
  const { pathname } = useLocation()
  const { t } = useIdioma()

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
        {t('Proyectos', 'Projects')}
        <svg viewBox="0 0 12 8" aria-hidden="true">
          <path d="m1 1.5 5 5 5-5" />
        </svg>
      </button>

      {abierto && (
        <ul className="nav__menu" id="menu-proyectos">
          <li>
            <Link to="/#proyectos" className="nav__menu-todos">
              {t('Ver todos', 'View all')}
            </Link>
          </li>
          {PROYECTOS.map(({ to, es, en }) => (
            <li key={to}>
              <Link to={to} aria-current={pathname.startsWith(to) ? 'page' : undefined}>
                {t(es, en)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Nav({ conContacto = true, compacto = false }) {
  const { lang, alternar, t } = useIdioma()
  return (
    <header className={compacto ? 'nav nav--compacto' : 'nav'}>
      <nav className="nav__links" aria-label={t('Principal', 'Main')}>
        <Link to="/">{t('Inicio', 'Home')}</Link>
        <Link to="/#sobre-jaz">{t('Sobre Jaz', 'About Jaz')}</Link>
        <MenuProyectos />
        {conContacto && <a href="#contacto">{t('Contacto', 'Contact')}</a>}
      </nav>
      <button
        className="nav__lang"
        type="button"
        lang={lang}
        title={t('Cambiar el idioma a inglés', 'Switch the language to Spanish')}
        aria-label={t('Idioma: español. Cambiar a inglés', 'Language: English. Switch to Spanish')}
        onClick={alternar}
      >
        {lang === 'es' ? 'Español' : 'English'}
      </button>
    </header>
  )
}
