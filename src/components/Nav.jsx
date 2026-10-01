import { Link } from 'react-router-dom'

export default function Nav({ conContacto = true, compacto = false }) {
  return (
    <header className={compacto ? 'nav nav--compacto' : 'nav'}>
      <nav className="nav__links" aria-label="Principal">
        <Link to="/">Inicio</Link>
        <Link to="/#sobre-jaz">Sobre Jaz</Link>
        <Link to="/#proyectos">Proyectos</Link>
        {conContacto && <a href="#contacto">Contacto</a>}
      </nav>
      <button className="nav__lang" type="button" lang="es" title="Idioma">
        Español
      </button>
    </header>
  )
}
