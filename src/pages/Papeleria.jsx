import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import Img from '../components/Img.jsx'
import Proyecto from '../components/Proyecto.jsx'

const paleta = [
  { hex: '#FEF3B3', texto: '#AA0005' },
  { hex: '#FED6DE', texto: '#AA0005' },
  { hex: '#FFA1C3', texto: '#FEF3B3' },
  { hex: '#AA0005', texto: '#FED6DE' },
]

export default function Papeleria() {
  return (
    <div className="pagina">
      <Nav />
      <main>
        <div className="marco-hero">
          <Hero imagen="pap-hero" titulo="Papelería — Mi lugar favorito" flecha={[50, 80]} />
        </div>

        <div id="contenido">
          <section className="sec sec--oscura pap-raptor">
            <div className="split split--raptor">
              <Proyecto titulo="Tarjetas personales" cliente="Raptor Autos" fecha="Enero 2026">
                <p>
                  Diseñé tarjetas personales tomando elementos propios de la identidad de la marca y
                  reinterpretándolos en una pieza visualmente llamativa. Busqué mantener la esencia de la marca,
                  pero dándole a cada tarjeta un carácter propio y diferencial.
                </p>
              </Proyecto>
              <Img className="pap-raptor__tarjetas" name="pap-raptor" alt="Tarjetas personales de Raptor Autos, frente y dorso" />
            </div>
            <Img className="pap-raptor__fotos" name="pap-raptor-fotos" alt="Tarjetas de Raptor Autos en contexto: sobre una mesa, entregadas en mano y dorso con QR" />
          </section>

          <section className="sec sec--crema pap-tarjetones">
            <div className="split split--tarjetones">
              <div className="pap-tarjetones__texto">
                <Proyecto titulo="Tarjetones" cliente="Pana Tentaciones" fecha="Junio 2026">
                  <p>
                    Creé una serie de tarjetones para acompañar los regalos del día del padre en una pastelería.
                    Trabajé una propuesta cálida y cercana, incorporando recursos gráficos que remiten a la
                    celebración y a la identidad del espacio.
                  </p>
                </Proyecto>
                <Img className="pap-tarjetones__mock" name="pap-tarjetones-mock" alt="Los cuatro tarjetones sobre una mesa" />
              </div>
              <Img className="pap-tarjetones__piezas" name="pap-tarjetones" alt="Cuatro tarjetones de colores: Un papá, Los mejores recuerdos, Gracias y Para el papá" />
            </div>
          </section>

          <section className="sec sec--oscura pap-fiore">
            <div className="split split--fiore">
              <Proyecto cliente="Fiore Banfied" fecha="Octubre 2026">
                <p>
                  Desarrollo de una serie gráfica explorando el vínculo entre color, tipografía y composición. La
                  propuesta construye un lenguaje visual cálido y expresivo, donde cada pieza mantiene una
                  identidad común pero encuentra su propia forma de comunicar.
                </p>
              </Proyecto>
              <ul className="paleta" aria-label="Paleta de colores">
                {paleta.map((c) => (
                  <li key={c.hex} style={{ background: c.hex, color: c.texto }}>
                    {c.hex}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Img className="a-ancho" name="pap-fiore-tarjetas" alt="Cuatro tarjetas de mesa Fiore Banfied para el día de la madre" />

          <section className="sec sec--crema pap-sefina">
            <Img name="pap-sefina" alt="Tarjetón «Gracias por elegirnos» de San Valentín sobre un sillón" />
            <Proyecto cliente="Fiore Banfied" fecha="Febrero 2026">
              <p>
                Una propuesta pensada para celebrar el amor desde la dulzura. Diseñé un tarjetón de san valentín
                donde se refleja la esencia de la marca creando una pieza que acompaña el momento y suman un
                detalle especial a la experiencia.
              </p>
            </Proyecto>
          </section>

          <section className="sec sec--oscura pap-menu">
            <div className="split split--menu">
              <Proyecto cliente="Menú Borges" fecha="Abril 2024">
                <p>
                  Desarrollo de una experiencia gráfica inspirada en Jorge Luis Borges, creando un recorrido para
                  lectores y escritores por Plaza Serrano. El circuito culmina en un foodtruck inspirado en el
                  universo del autor, integrando narrativa, identidad y diseño editorial.
                </p>
              </Proyecto>
              <Img name="pap-menu-mano" alt="Una mano sostiene el menú tríptico de SOHO dB" />
            </div>
            <Img className="pap-menu__triptico" name="pap-menu-triptico" alt="Menú tríptico de SOHO dB, abierto y cerrado" />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
