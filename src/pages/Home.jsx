import Nav from '../components/Nav.jsx'
import Footer, { Contacto, Sociales } from '../components/Footer.jsx'
import Img from '../components/Img.jsx'
import TarjetaProyecto from '../components/TarjetaProyecto.jsx'

export default function Home() {
  return (
    <div className="pagina">
      <Nav conContacto={false} compacto />
      <main>
        <section className="home-hero">
          <Img name="home-hero" alt="Jazmín Bianchi — Diseño Gráfico — Portfolio 2026" eager />
          <h1 className="sr-only">Jazmín Bianchi, diseño gráfico. Portfolio 2026</h1>
        </section>

        <section className="home-frase">
          <Img name="home-quote" alt="" />
          <p className="sr-only">
            Soy amor, soy pasión, soy libertad, soy creadora. Soy amiga, soy persona, soy pensadora, soy
            independiente, soy calma y también fuego. Soy diseñadora, y lo llevo en el alma. En el corazón,
            a donde sea que voy. Soy todo eso, y todo eso hace que sea yo. Jazmín.
          </p>
        </section>

        <section className="sobre lineas" id="sobre-jaz">
          <div className="sobre__fila sobre__fila--titulo">
            <h2 className="sobre__titulo">
              <span className="rosa">[</span> SOBRE JAZ <span className="rosa">].</span>
            </h2>
            <div className="sobre__intro">
              <p>
                A lo largo de mi vida fui construyéndome a través de la <strong>exploración:</strong> probando,
                cambiando y descubriendo nuevas posibilidades hasta encontrar aquello que sentía propio.
              </p>
              <p>
                Mi camino hacia el diseño no fue lineal. No comencé sabiendo qué quería ser, sino explorando
                todo aquello que <strong>despertaba mi curiosidad.</strong> Y en esa búsqueda encontré una forma
                de crear, resolver y expresarme que hoy <strong>me representa.</strong>
              </p>
            </div>
          </div>

          <div className="sobre__fila sobre__fila--datos">
            <div className="sobre__col sobre__col--educacion">
              <h3>Educación</h3>
              <p className="dato"><strong>UADE (2022 - 2026)</strong><br />Licenciatura en Diseño Gráfico</p>
              <p className="dato"><strong>Colegio French (2016 - 2021)</strong><br />Graduada con bachiller con orientación en Economía</p>
              <h3>Idiomas</h3>
              <p className="dato dato--plano">Inglés avanzado, Portugues basico, Español nativo</p>
            </div>
            <div className="sobre__col sobre__col--habilidades">
              <h3>Habilidades</h3>
              <ul className="lista-doble">
                <li>Adobe Illustrator</li>
                <li>Canva</li>
                <li>Adobe Photoshop</li>
                <li>Figma</li>
                <li>Adobe Indisign</li>
                <li>CapCut</li>
              </ul>
              <h3>Habilidades técnicas</h3>
              <ul className="lista-doble">
                <li>Diseño Web</li>
                <li>Diseño Editorial</li>
                <li>Edición de video</li>
                <li>Piezas para redes</li>
              </ul>
            </div>
            <div className="sobre__col sobre__col--contacto">
              <h3>Contacto</h3>
              <Contacto />
              <Sociales />
            </div>
          </div>

          <div className="sobre__fila sobre__fila--experiencia">
            <h3>Experiencia laboral</h3>
            <div className="experiencia">
              <article>
                <h4>Hiper Agency</h4>
                <p className="periodo">(Agosto 2025 - Actualidad)</p>
                <p>
                  Creación de contenido visual para redes sociales, desarrollo de piezas gráficas alineadas a la
                  identidad de marca, buscando comunicar conceptos de forma estética, estratégica y atractiva.
                </p>
              </article>
              <article>
                <h4>Billabong</h4>
                <p className="periodo">(Enero 2025 - Julio 2026)</p>
                <p>
                  Pasante de diseño encargada de edición y retoque de fotografías, junto con el diseño y armado de
                  catálogos mayoristas.
                </p>
              </article>
              <article>
                <h4>Mina</h4>
                <p className="periodo periodo--normal">(Emprendimiento personal)</p>
                <p>
                  Diseño y creación de papelería personalizada: tarjetas, flyers, álbumes, tarjetones y piezas
                  gráficas adaptadas a cada cliente. (minaaa_dg)
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="proyectos lineas" id="proyectos">
          <h2 className="proyectos__titulo">Proyectos</h2>
          <div className="tarjetas proyectos__tarjetas">
            <TarjetaProyecto to="/papeleria" imagen="pap-sefina" nombre="Papelería" />
            <TarjetaProyecto to="/experimentacion" imagen="exp-grande" nombre="Experimentación" posicion="30% 50%" />
            <TarjetaProyecto to="/diseno-digital" imagen="dig-vinos" nombre="Diseño digital" />
            <TarjetaProyecto to="/posters" imagen="bestias-1" nombre="Posters" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
