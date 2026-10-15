import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useIdioma } from '../idioma.jsx'

const PROYECTOS = [
  { to: '/papeleria', es: 'Papelería', en: 'Stationery' },
  { to: '/experimentacion', es: 'Experimentación', en: 'Experimentation' },
  {
    to: '/diseno-digital',
    es: 'Diseño digital',
    en: 'Digital design',
    hijos: [
      { to: '/diseno-digital#piezas-para-redes', es: 'Piezas para redes', en: 'Social media pieces' },
      { to: '/diseno-digital#banners-web', es: 'Banners Web', en: 'Web Banners' },
      { to: '/diseno-digital#edicion-de-reels', es: 'Edición de reels', en: 'Reel editing' },
      { to: '/diseno-digital#diseno-web', es: 'Diseño web', en: 'Web design' },
    ],
  },
  {
    to: '/posters',
    es: 'Posters',
    en: 'Posters',
    hijos: [
      { to: '/posters/konex', es: 'Konex', en: 'Konex' },
      { to: '/posters/borges', es: 'Borges', en: 'Borges' },
      { to: '/posters/las-bestias', es: 'Las Bestias', en: 'Las Bestias' },
    ],
  },
]

// "Proyectos" abre un desplegable para ir directo a cualquier proyecto desde cualquier página.
// Se abre con clic o con el mouse encima (solo en dispositivos con mouse) y se cierra con Esc, con un
// clic afuera o al elegir una opción. Con el teclado: Enter/Espacio o flecha abajo lo abren.
// "Diseño digital" y "Posters" tienen un subdesplegable con sus secciones: la flechita de al lado lo abre y
// el nombre lleva a la página.
function MenuProyectos() {
  const [abierto, setAbierto] = useState(false)
  const [expandido, setExpandido] = useState(null)
  const raiz = useRef(null)
  const cierre = useRef(0)
  const { pathname } = useLocation()
  const { t } = useIdioma()

  // Al cambiar de página se cierra.
  useEffect(() => setAbierto(false), [pathname])

  // Al abrir el menú, el subdesplegable del proyecto en el que estás ya aparece abierto; al cerrarlo se pliegan.
  useEffect(() => {
    setExpandido(abierto ? (PROYECTOS.find((p) => p.hijos && pathname.startsWith(p.to))?.to ?? null) : null)
  }, [abierto, pathname])

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
          {PROYECTOS.map(({ to, es, en, hijos }) => (
            <li key={to} className="nav__menu-item">
              <div className="nav__menu-fila">
                <Link to={to} aria-current={pathname.startsWith(to) ? 'page' : undefined}>
                  {t(es, en)}
                </Link>
                {hijos && (
                  <button
                    type="button"
                    className={`nav__menu-mas ${expandido === to ? 'abierto' : ''}`}
                    aria-expanded={expandido === to}
                    aria-controls={`submenu-${to.slice(1)}`}
                    aria-label={t(`Ver las secciones de ${es}`, `Show the ${en} sections`)}
                    onClick={() => setExpandido((e) => (e === to ? null : to))}
                  >
                    <svg viewBox="0 0 12 8" aria-hidden="true">
                      <path d="m1 1.5 5 5 5-5" />
                    </svg>
                  </button>
                )}
              </div>
              {hijos && expandido === to && (
                <ul className="nav__submenu" id={`submenu-${to.slice(1)}`}>
                  {hijos.map((h) => (
                    <li key={h.to}>
                      <Link to={h.to}>{t(h.es, h.en)}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// En pantallas angostas los links se esconden detrás de un botón de tres rayitas ("Menú") que los abre en un
// panel debajo del header. Se cierra al elegir una opción, al cambiar de página, con Esc o con un clic afuera.
export default function Nav({ conContacto = true, compacto = false }) {
  const { lang, alternar, t } = useIdioma()
  const [menuAbierto, setMenuAbierto] = useState(false)
  const cabecera = useRef(null)
  const { pathname, hash } = useLocation()

  useEffect(() => setMenuAbierto(false), [pathname, hash])

  useEffect(() => {
    if (!menuAbierto) return
    const cerrar = (e) => {
      if (e.type === 'keydown' ? e.key === 'Escape' : !cabecera.current?.contains(e.target)) setMenuAbierto(false)
    }
    document.addEventListener('mousedown', cerrar)
    document.addEventListener('keydown', cerrar)
    return () => {
      document.removeEventListener('mousedown', cerrar)
      document.removeEventListener('keydown', cerrar)
    }
  }, [menuAbierto])

  return (
    <header className={compacto ? 'nav nav--compacto' : 'nav'} ref={cabecera}>
      <button
        type="button"
        className={`nav__hamburguesa ${menuAbierto ? 'abierto' : ''}`}
        aria-expanded={menuAbierto}
        aria-controls="menu-principal"
        onClick={() => setMenuAbierto((a) => !a)}
      >
        <span className="nav__rayitas" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        {t('Menú', 'Menu')}
      </button>
      <nav
        className={`nav__links ${menuAbierto ? 'abierto' : ''}`}
        id="menu-principal"
        aria-label={t('Principal', 'Main')}
        onClick={(e) => e.target.closest('a') && setMenuAbierto(false)}
      >
        <Link to="/">{t('Inicio', 'Home')}</Link>
        <Link to="/#sobre-jaz">{t('Sobre mi', 'About me')}</Link>
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
