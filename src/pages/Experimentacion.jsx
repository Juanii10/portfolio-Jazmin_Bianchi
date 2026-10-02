import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import Img from '../components/Img.jsx'
import Proyecto from '../components/Proyecto.jsx'
import SliderExperimentacion from '../components/SliderExperimentacion.jsx'

export default function Experimentacion() {
  return (
    <div className="pagina">
      <Nav />
      <main>
        <div className="marco-hero">
          <Hero imagen="exp-hero" titulo="Experimentación — Donde me dejo ser" flecha={[50.06, 66.74]} />
        </div>

        <div id="contenido">
          <section className="sec sec--negra exp-palabras">
            <div className="exp-palabras__cabecera">
              <h2 className="proyecto__titulo">[[ Entre palabras</h2>
              <p className="exp-palabras__sub">El proceso como parte fundamental del diseño</p>
            </div>
            <SliderExperimentacion />

            <div className="exp-mosaico">
              <div className="exp-mosaico__izq">
                <Proyecto fecha="Julio 2024" className="exp-intro">
                  <p><strong>Un ejercicio de exploración a partir de palabras.</strong></p>
                  <p>
                    Tomé palabras de un libro y las convertí en composiciones utilizando diferentes técnicas
                    manuales.
                  </p>
                  <p>
                    La idea fue experimentar y descubrir distintas maneras de representar una misma palabra a
                    través de materiales, formas y texturas.
                  </p>
                </Proyecto>
                <Img name="exp-col-izq" alt="Composiciones tipográficas: «Dije», «Complejo» y tornillos con herramientas" />
              </div>
              <div className="exp-mosaico__der">
                <Img name="exp-grande" alt="La palabra «pie» hecha con pintura naranja sobre violeta" />
                <Img name="exp-col-der" alt="Más composiciones: «Sentido», «Islas», «Misterioso» y «Complejo»" />
              </div>
            </div>
          </section>

          <section className="sec sec--negra exp-movimiento">
            <div className="exp-movimiento__grid">
              <div className="exp-movimiento__izq">
                <Proyecto titulo="Movimiento en juego" fecha="Septiembre 2024">
                  <p>
                    A partir de un relevamiento fotográfico de plazas, se exploraron los movimientos de juegos como
                    calesitas y hamacas, creando tres composiciones sobre rotación, oscilación y equilibrio.
                  </p>
                </Proyecto>
                <Img name="exp-mov-fotos" alt="Relevamiento fotográfico de plazas: texturas y formas" />
              </div>
              <div className="exp-movimiento__medio">
                <Img name="exp-mov-medio" alt="Dos composiciones sobre la rotación y la oscilación" />
                <aside className="frase">
                  <h3>[[ Frase disparadora:</h3>
                  <p>
                    En la plaza, el péndulo del tiempo se mueve en un vaivén constante, recordándonos que cada giro,
                    por pequeño que sea, forma parte de una danza eterna entre equilibrio y movimiento.
                  </p>
                </aside>
              </div>
              <Img className="exp-movimiento__der" name="exp-mov-der" alt="Composición «angular» sobre una red de juegos" />
            </div>
          </section>
        </div>
      </main>
      <Footer negro />
    </div>
  )
}
