import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import Img from '../components/Img.jsx'
import Proyecto from '../components/Proyecto.jsx'
import SliderExperimentacion from '../components/SliderExperimentacion.jsx'
import { useIdioma } from '../idioma.jsx'

export default function Experimentacion() {
  const { t } = useIdioma()
  return (
    <div className="pagina">
      <Nav />
      <main>
        <div className="marco-hero">
          <Hero
            imagen="exp-hero"
            titulo={t('Experimentación — Donde me dejo ser', 'Experimentation — Where I let myself be')}
            flecha={[50.06, 66.74]}
          />
        </div>

        <div id="contenido">
          <section className="sec sec--negra exp-palabras">
            <div className="exp-palabras__cabecera">
              <h2 className="proyecto__titulo">[[ {t('Entre palabras', 'Between words')}</h2>
              <p className="exp-palabras__sub">
                {t('El proceso como parte fundamental del diseño', 'The process as a fundamental part of design')}
              </p>
            </div>
            <SliderExperimentacion />

            <div className="exp-mosaico">
              <div className="exp-mosaico__izq">
                <Proyecto fecha="Julio 2024" className="exp-intro">
                  <p>
                    <strong>{t('Un ejercicio de exploración a partir de palabras.', 'An exploration exercise based on words.')}</strong>
                  </p>
                  <p>
                    {t(
                      'Tomé palabras de un libro y las convertí en composiciones utilizando diferentes técnicas manuales.',
                      'I took words from a book and turned them into compositions using different manual techniques.',
                    )}
                  </p>
                  <p>
                    {t(
                      'La idea fue experimentar y descubrir distintas maneras de representar una misma palabra a través de materiales, formas y texturas.',
                      'The idea was to experiment and discover different ways of representing the same word through materials, shapes and textures.',
                    )}
                  </p>
                </Proyecto>
                <Img
                  name="exp-col-izq"
                  alt={t(
                    'Composiciones tipográficas: «Dije», «Complejo» y tornillos con herramientas',
                    'Typographic compositions: “Dije”, “Complejo” and screws with tools',
                  )}
                />
              </div>
              <div className="exp-mosaico__der">
                <Img
                  name="exp-grande"
                  alt={t('La palabra «pie» hecha con pintura naranja sobre violeta', 'The word “pie” made with orange paint on violet')}
                />
                <Img
                  name="exp-col-der"
                  alt={t(
                    'Más composiciones: «Sentido», «Islas», «Misterioso» y «Complejo»',
                    'More compositions: “Sentido”, “Islas”, “Misterioso” and “Complejo”',
                  )}
                />
              </div>
            </div>
          </section>

          <section className="sec sec--negra exp-movimiento">
            <div className="exp-movimiento__grid">
              <div className="exp-movimiento__izq">
                <Proyecto titulo={t('Movimiento en juego', 'Movement at play')} fecha="Septiembre 2024">
                  <p>
                    {t(
                      'A partir de un relevamiento fotográfico de plazas, se exploraron los movimientos de juegos como calesitas y hamacas, creando tres composiciones sobre rotación, oscilación y equilibrio.',
                      'Starting from a photographic survey of playgrounds, the movements of play equipment such as merry-go-rounds and swings were explored, creating three compositions about rotation, oscillation and balance.',
                    )}
                  </p>
                </Proyecto>
                <Img
                  name="exp-mov-fotos"
                  alt={t('Relevamiento fotográfico de plazas: texturas y formas', 'Photographic survey of playgrounds: textures and shapes')}
                />
              </div>
              <div className="exp-movimiento__medio">
                <Img
                  name="exp-mov-medio"
                  alt={t('Dos composiciones sobre la rotación y la oscilación', 'Two compositions about rotation and oscillation')}
                />
                <aside className="frase">
                  <h3>[[ {t('Frase disparadora:', 'Trigger phrase:')}</h3>
                  <p>
                    {t(
                      'En la plaza, el péndulo del tiempo se mueve en un vaivén constante, recordándonos que cada giro, por pequeño que sea, forma parte de una danza eterna entre equilibrio y movimiento.',
                      'In the playground, the pendulum of time swings in a constant sway, reminding us that every turn, however small, is part of an eternal dance between balance and movement.',
                    )}
                  </p>
                </aside>
              </div>
              <Img
                className="exp-movimiento__der"
                name="exp-mov-der"
                alt={t('Composición «angular» sobre una red de juegos', '“Angular” composition on a playground net')}
              />
            </div>
          </section>
        </div>
      </main>
      <Footer negro />
    </div>
  )
}
