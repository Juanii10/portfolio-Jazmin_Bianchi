import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import Tarjetas from '../components/Tarjetas.jsx'
import { useIdioma } from '../idioma.jsx'

export default function Posters() {
  const { t } = useIdioma()
  return (
    <div className="pagina">
      <Nav />
      <main>
        <div className="marco-hero">
          <Hero
            imagen="pos-hero"
            titulo={t('Posters — Mi zona de comfort', 'Posters — My comfort zone')}
            movil={{
              imagen: 'm-pos-hero',
              titulo: [['Posters', 'Posters']],
              sub: ['[ Mi zona de comfort ]', '[ My comfort zone ]'],
              caja: [48, 640, 873, 940],
              tam: 170,
              tamSub: 46,
              subNegro: true,
              flecha: [460, 1068, 92],
            }}
          />
        </div>
        <section className="sec sec--negra posters-indice" id="contenido">
          <Tarjetas
            items={[
              { to: '/posters/konex', imagen: 'konex-1', nombre: 'Konex', posicion: '50% 84%' },
              { to: '/posters/borges', imagen: 'borges-1', nombre: 'Borges', posicion: '50% 40%' },
              { to: '/posters/las-bestias', imagen: 'bestias-1', nombre: 'Las Bestias', posicion: '50% 55%' },
            ]}
          />
        </section>
      </main>
      <Footer negro />
    </div>
  )
}
