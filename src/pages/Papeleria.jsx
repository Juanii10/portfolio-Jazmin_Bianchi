import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import Img from '../components/Img.jsx'
import Proyecto from '../components/Proyecto.jsx'
import { useIdioma } from '../idioma.jsx'

const paleta = [
  { hex: '#FEF3B3', texto: '#AA0005' },
  { hex: '#FED6DE', texto: '#AA0005' },
  { hex: '#FFA1C3', texto: '#FEF3B3' },
  { hex: '#AA0005', texto: '#FED6DE' },
]

export default function Papeleria() {
  const { t } = useIdioma()
  return (
    <div className="pagina">
      <Nav />
      <main>
        <div className="marco-hero">
          <Hero
            imagen="pap-hero"
            titulo={t('Papelería — Mi lugar favorito', 'Stationery — My favorite place')}
            flecha={[49.98, 80.09]}
          />
        </div>

        <div id="contenido">
          <section className="sec sec--oscura pap-raptor">
            <div className="split split--raptor">
              <Proyecto titulo={t('Tarjetas personales', 'Business cards')} cliente="Raptor Autos" fecha="Enero 2026">
                <p>
                  {t(
                    'Diseñé tarjetas personales tomando elementos propios de la identidad de la marca y reinterpretándolos en una pieza visualmente llamativa. Busqué mantener la esencia de la marca, pero dándole a cada tarjeta un carácter propio y diferencial.',
                    "I designed business cards drawing on elements of the brand's identity and reinterpreting them in a visually striking piece. I sought to keep the essence of the brand while giving each card its own distinctive character.",
                  )}
                </p>
              </Proyecto>
              <Img
                className="pap-raptor__tarjetas"
                name="pap-raptor"
                alt={t('Tarjetas personales de Raptor Autos, frente y dorso', 'Raptor Autos business cards, front and back')}
              />
            </div>
            <Img
              className="pap-raptor__fotos"
              name="pap-raptor-fotos"
              alt={t(
                'Tarjetas de Raptor Autos en contexto: sobre una mesa, entregadas en mano y dorso con QR',
                'Raptor Autos cards in context: on a table, handed over, and the back with a QR code',
              )}
            />
          </section>

          <section className="sec sec--crema pap-tarjetones">
            <div className="split split--tarjetones">
              <div className="pap-tarjetones__texto">
                <Proyecto titulo={t('Tarjetones', 'Gift cards')} cliente="Pana Tentaciones" fecha="Junio 2026">
                  <p>
                    {t(
                      'Creé una serie de tarjetones para acompañar los regalos del día del padre en una pastelería. Trabajé una propuesta cálida y cercana, incorporando recursos gráficos que remiten a la celebración y a la identidad del espacio.',
                      "I created a series of gift cards to accompany Father's Day presents at a bakery. I worked on a warm, friendly concept, incorporating graphic elements that evoke the celebration and the identity of the space.",
                    )}
                  </p>
                </Proyecto>
                <Img
                  className="pap-tarjetones__mock"
                  name="pap-tarjetones-mock"
                  alt={t('Los cuatro tarjetones sobre una mesa', 'The four gift cards on a table')}
                />
              </div>
              <Img
                className="pap-tarjetones__piezas"
                name="pap-tarjetones"
                alt={t(
                  'Cuatro tarjetones de colores: Un papá, Los mejores recuerdos, Gracias y Para el papá',
                  'Four colorful gift cards: Un papá, Los mejores recuerdos, Gracias and Para el papá',
                )}
              />
            </div>
          </section>

          <section className="sec sec--oscura pap-fiore">
            <div className="split split--fiore">
              <Proyecto cliente="Fiore Banfield" fecha="Octubre 2026">
                <p>
                  {t(
                    'Desarrollo de una serie gráfica explorando el vínculo entre color, tipografía y composición. La propuesta construye un lenguaje visual cálido y expresivo, donde cada pieza mantiene una identidad común pero encuentra su propia forma de comunicar.',
                    'Development of a graphic series exploring the link between color, typography and composition. The concept builds a warm, expressive visual language, where each piece keeps a common identity but finds its own way of communicating.',
                  )}
                </p>
              </Proyecto>
              <ul className="paleta" aria-label={t('Paleta de colores', 'Color palette')}>
                {paleta.map((c) => (
                  <li key={c.hex} style={{ background: c.hex, color: c.texto }}>
                    {c.hex}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Img
            className="a-ancho"
            name="pap-fiore-tarjetas"
            alt={t(
              'Cuatro tarjetas de mesa Fiore Banfield para el día de la madre',
              "Four Fiore Banfield table cards for Mother's Day",
            )}
          />

          <section className="sec sec--crema pap-sefina">
            <Img
              name="pap-sefina"
              alt={t(
                'Tarjetón «Gracias por elegirnos» de San Valentín sobre un sillón',
                'Valentine’s Day card “Gracias por elegirnos” on an armchair',
              )}
            />
            <Proyecto cliente="Sefina Home" fecha="Febrero 2026">
              <p>
                {t(
                  'Una propuesta pensada para celebrar el amor desde la dulzura. Diseñé un tarjetón de san valentín donde se refleja la esencia de la marca creando una pieza que acompaña el momento y suman un detalle especial a la experiencia.',
                  'A concept designed to celebrate love through sweetness. I designed a Valentine’s Day card that reflects the essence of the brand, creating a piece that accompanies the moment and adds a special touch to the experience.',
                )}
              </p>
            </Proyecto>
          </section>

          <section className="sec sec--oscura pap-menu">
            <div className="split split--menu">
              <Proyecto cliente={t('Menú Borges', 'Borges Menu')} fecha="Abril 2024">
                <p>
                  {t(
                    'Desarrollo de una experiencia gráfica inspirada en Jorge Luis Borges, creando un recorrido para lectores y escritores por Plaza Serrano. El circuito culmina en un foodtruck inspirado en el universo del autor, integrando narrativa, identidad y diseño editorial.',
                    "Development of a graphic experience inspired by Jorge Luis Borges, creating a route for readers and writers around Plaza Serrano. The circuit culminates in a food truck inspired by the author's universe, integrating narrative, identity and editorial design.",
                  )}
                </p>
              </Proyecto>
              <Img
                name="pap-menu-mano"
                alt={t('Una mano sostiene el menú tríptico de SOHO dB', 'A hand holds the SOHO dB tri-fold menu')}
              />
            </div>
            <Img
              className="pap-menu__triptico"
              name="pap-menu-triptico"
              alt={t('Menú tríptico de SOHO dB, abierto y cerrado', 'SOHO dB tri-fold menu, open and closed')}
            />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
