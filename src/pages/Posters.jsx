import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import TarjetaProyecto from '../components/TarjetaProyecto.jsx'
import { useIdioma } from '../idioma.jsx'

export default function Posters() {
  const { t } = useIdioma()
  return (
    <div className="pagina">
      <Nav />
      <main>
        <div className="marco-hero">
          <Hero imagen="pos-hero" titulo={t('Posters — Mi zona de comfort', 'Posters — My comfort zone')} />
        </div>
        <section className="sec sec--negra posters-indice" id="contenido">
          <div className="tarjetas">
          <TarjetaProyecto to="/posters/konex" imagen="konex-1" nombre="Konex" posicion="50% 84%" />
          <TarjetaProyecto to="/posters/borges" imagen="borges-1" nombre="Borges" posicion="50% 40%" />
          <TarjetaProyecto to="/posters/las-bestias" imagen="bestias-1" nombre="Las Bestias" posicion="50% 55%" />
          </div>
        </section>
      </main>
      <Footer negro />
    </div>
  )
}
