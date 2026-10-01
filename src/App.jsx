import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Papeleria from './pages/Papeleria.jsx'
import Experimentacion from './pages/Experimentacion.jsx'
import DisenoDigital from './pages/DisenoDigital.jsx'
import Posters from './pages/Posters.jsx'
import PostersKonex from './pages/PostersKonex.jsx'
import PostersBorges from './pages/PostersBorges.jsx'
import PostersBestias from './pages/PostersBestias.jsx'

// Al cambiar de ruta vuelve arriba, o baja hasta el ancla (#sobre-jaz, #proyectos, #contacto).
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/papeleria" element={<Papeleria />} />
        <Route path="/experimentacion" element={<Experimentacion />} />
        <Route path="/diseno-digital" element={<DisenoDigital />} />
        <Route path="/posters" element={<Posters />} />
        <Route path="/posters/konex" element={<PostersKonex />} />
        <Route path="/posters/borges" element={<PostersBorges />} />
        <Route path="/posters/las-bestias" element={<PostersBestias />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
