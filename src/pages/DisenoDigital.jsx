import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import Img from '../components/Img.jsx'
import Proyecto from '../components/Proyecto.jsx'

export default function DisenoDigital() {
  return (
    <div className="pagina">
      <Nav />
      <main>
        <div className="marco-hero">
          <Hero imagen="dig-hero" titulo="Diseño digital — Donde pienso, creo y resuelvo" flecha={[50, 85.5]} />
        </div>

        <div id="contenido">
          {/* Piezas para redes */}
          <section className="sec sec--negra dig-redes">
            <h2 className="proyecto__titulo dig-redes__titulo">[[ Piezas para redes</h2>
            <div className="dig-redes__grid">
              <Proyecto cliente="Visionar Coaching" fecha="Abril 2025 - Actualidad" className="dig-texto">
                <p>
                  Desarrollo de un sistema visual para redes, combinando violetas y rosados, tipografía, formas y
                  texturas para crear piezas variadas que mantienen una identidad coherente y reconocible.
                </p>
              </Proyecto>
              <Img className="dig-redes__grilla" name="dig-visionar-grilla" alt="Nueve publicaciones de Visionar Coaching en violeta y rosa" />
              <Img className="dig-redes__celu" name="dig-visionar-celu" alt="Perfil de Instagram visionar.coaching en un celular" />
            </div>
            <Img className="a-ancho dig-redes__stories" name="dig-visionar-stories" alt="Seis stories de Interaktell para Visionar" />
          </section>

          {/* Siempre Bebidas Caballito */}
          <section className="sec sec--crema dig-bebidas">
            <Proyecto cliente="Siempre Bebidas Caballito" fecha="Agosto 2025 - Junio 2026" className="dig-texto">
              <p>
                Diseño de contenido digital, creé una línea visual dinámica a partir de fotografía de producto,
                tipografía de alto impacto y recursos gráficos. La propuesta busca comunicar promociones, eventos y
                contenidos de manera clara, manteniendo una identidad adaptable a distintos formatos.
              </p>
            </Proyecto>
            <div className="dig-bebidas__fig">
              <Img className="dig-bebidas__tope" name="dig-bebidas-celu-tope" alt="" />
              <Img name="dig-bebidas-grilla" alt="Publicaciones de Siempre Bebidas Caballito: cata de vinos, cata de cervezas, brindis por el amor, recetas y sorteos" />
            </div>
          </section>

          {/* Caterina + Banner Web + Edición de reels */}
          <section className="sec sec--negra dig-caterina">
            <div className="dig-redes__grid dig-redes__grid--caterina">
              <Proyecto cliente="Caterina Beauty Studio" fecha="Julio 2025 - Actualidad" className="dig-texto">
                <p>
                  Construí una estética femenina y delicada a través de fotografía, tipografía y una paleta de rosas.
                  Las piezas combinan información y recursos visuales para comunicar servicios, productos y
                  contenidos de forma atractiva.
                </p>
              </Proyecto>
              <Img className="dig-redes__grilla" name="dig-caterina-grilla" alt="Publicaciones de Caterina Beauty Studio" />
              <Img className="dig-redes__celu" name="dig-caterina-celu" alt="Perfil de Instagram caterina.beautystudio en un celular" />
            </div>

            <h2 className="proyecto__titulo dig-banner__titulo">[[ Banner Web</h2>
            <Img className="a-ancho dig-banner" name="dig-banner-mueblin" alt="Mueblin Hogar 2025: banner web «¡El estilo de tu hogar lo podés encontrar aquí!» en notebook y celular" />
            <Img className="a-ancho dig-banner dig-banner--2" name="dig-banner-comardex" alt="Comardex 2025: banner web «Productos 100% originales»" />
          </section>

          <section className="sec sec--negra dig-reels">
            <div className="dig-reels__texto">
              <Proyecto titulo="Edición de reels" cliente="Cuan Arquitectura" fecha="Julio 2025 - Actualidad">
                <p>
                  Creé una serie de tarjetones para acompañar los regalos del día del padre en una pastelería.
                  trabajé una propuesta cálida y cercana, incorporando recursos gráficos que remiten a la
                  celebración y a la identidad del espacio.
                </p>
              </Proyecto>
            </div>
            <Img className="dig-reels__celu" name="dig-reels" alt="Reel de Cuan Arquitectura en un celular" />
          </section>

          {/* Diseño web */}
          <section className="sec sec--crema dig-web">
            <div className="dig-web__cabecera">
              <Proyecto titulo="Diseño web" cliente="Sabores + Esquinas" fecha="Julio 2024">
                <p>
                  Desarrollo de la identidad visual de un micrositio editorial, explorando una estética fresca y
                  cercana a través de color, tipografía, fotografía y recursos gráficos.
                </p>
              </Proyecto>
              <Img name="dig-uikit" alt="UI Kit de Sabores + Esquinas: fuente Montserrat, paleta de colores, iconografía, botones y filtros" />
            </div>

            <div className="dig-web__bloque">
              <Proyecto cliente="Micrositio" className="dig-texto dig-texto--ancho">
                <p>
                  Micrositio de un diario digital ficticio dedicado a descubrir qué hacer en Corrientes, con foco en
                  su gastronomía y cultura. Reúne recetas, restaurantes, productos típicos y experiencias para
                  explorar la identidad culinaria de la provincia.
                </p>
              </Proyecto>
            </div>
            <Img className="a-ancho" name="dig-micrositio-1" alt="Micrositio Sabores + Esquinas en monitor y celular: «Aventura semanal — Ruta de la yerba mate»" />

            <div className="dig-web__bloque">
              <Proyecto cliente="Artículo" className="dig-texto dig-texto--ancho">
                <p>
                  Una de las secciones del micrositio lleva la exploración gastronómica a una receta concreta. El
                  artículo presenta el plato, sus ingredientes y su preparación, manteniendo el lenguaje visual y
                  editorial de La Corriente.
                </p>
              </Proyecto>
            </div>
            <Img className="a-ancho" name="dig-micrositio-2" alt="Artículo «Pacú al horno con salsa verde y puré de calabaza» en monitor y celular" />
          </section>
        </div>
        <div className="relleno-negro" aria-hidden="true" />
      </main>
      <Footer negro />
    </div>
  )
}
