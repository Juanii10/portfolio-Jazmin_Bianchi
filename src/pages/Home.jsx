import Nav from '../components/Nav.jsx'
import Footer, { Contacto, Sociales } from '../components/Footer.jsx'
import HeroHome from '../components/HeroHome.jsx'
import TarjetaProyecto from '../components/TarjetaProyecto.jsx'
import { useIdioma } from '../idioma.jsx'

export default function Home() {
  const { t, fecha } = useIdioma()
  return (
    <div className="pagina">
      <Nav conContacto={false} compacto />
      <main>
        <HeroHome />

        <section className="home-frase lineas">
          <img className="home-frase__fondo" src={`${import.meta.env.BASE_URL}img/home-frase.jpg`} alt="" width="1600" height="892" loading="lazy" decoding="async" />
          <div className="home-frase__borde" aria-hidden="true" />
          <div className="home-frase__texto">
            {t(
              <>
                <p>
                  Soy amor, soy pasión, soy libertad,{' '}<br className="salto" />
                  <span className="rosa">[soy creadora].</span> soy amiga, soy persona,{' '}<br className="salto" />
                  soy pensadora, soy independiente, soy{' '}<br className="salto" />
                  calma y también fuego.
                </p>
                <p>
                  Soy diseñadora, <span className="rosa">[y lo llevo en el alma].</span> En{' '}<br className="salto" />
                  el corazón, a donde sea que voy.
                </p>
                <p>Soy todo eso, y todo eso hace que sea yo.</p>
              </>,
              <>
                <p>
                  I am love, I am passion, I am freedom,{' '}<br className="salto" />
                  <span className="rosa">[I am a creator].</span> I am a friend, I am a person,{' '}<br className="salto" />
                  I am a thinker, I am independent, I am{' '}<br className="salto" />
                  calm and also fire.
                </p>
                <p>
                  I am a designer, <span className="rosa">[and I carry it in my soul].</span> In{' '}<br className="salto" />
                  my heart, wherever I go.
                </p>
                <p>I am all of that, and all of that makes me who I am.</p>
              </>,
            )}
            <p className="home-frase__firma">Jazmín</p>
          </div>
        </section>

        <section className="sobre lineas" id="sobre-jaz">
          <div className="sobre__fila sobre__fila--titulo">
            <h2 className="sobre__titulo">
              <span className="rosa">[</span> {t('SOBRE JAZ', 'ABOUT JAZ')} <span className="rosa">].</span>
            </h2>
            <div className="sobre__intro">
              {t(
                <>
                  <p>
                    A lo largo de mi vida fui construyéndome a través de la <strong>exploración:</strong> probando,
                    cambiando y descubriendo nuevas posibilidades hasta encontrar aquello que sentía propio.
                  </p>
                  <p>
                    Mi camino hacia el diseño no fue lineal. No comencé sabiendo qué quería ser, sino explorando
                    todo aquello que <strong>despertaba mi curiosidad.</strong> Y en esa búsqueda encontré una forma
                    de crear, resolver y expresarme que hoy <strong>me representa.</strong>
                  </p>
                </>,
                <>
                  <p>
                    Throughout my life I built myself through <strong>exploration:</strong> trying, changing and
                    discovering new possibilities until I found what felt like my own.
                  </p>
                  <p>
                    My path to design wasn't linear. I didn't start out knowing what I wanted to be, but exploring
                    everything that <strong>sparked my curiosity.</strong> And in that search I found a way of
                    creating, solving and expressing myself that <strong>represents me</strong> today.
                  </p>
                </>,
              )}
            </div>
          </div>

          <div className="sobre__fila sobre__fila--datos">
            <div className="sobre__col sobre__col--educacion">
              <h3>{t('Educación', 'Education')}</h3>
              <p className="dato">
                <strong>UADE (2022 - 2026)</strong>
                <br />
                {t('Licenciatura en Diseño Gráfico', "Bachelor's degree in Graphic Design")}
              </p>
              <p className="dato">
                <strong>Colegio French (2016 - 2021)</strong>
                <br />
                {t('Graduada con bachiller con orientación en Economía', 'High school diploma with a focus on Economics')}
              </p>
              <h3>{t('Idiomas', 'Languages')}</h3>
              <p className="dato dato--plano">
                {t('Inglés avanzado, Portugues basico, Español nativo', 'Advanced English, Basic Portuguese, Native Spanish')}
              </p>
            </div>
            <div className="sobre__col sobre__col--habilidades">
              <h3>{t('Habilidades', 'Skills')}</h3>
              <ul className="lista-doble">
                <li>Adobe Illustrator</li>
                <li>Canva</li>
                <li>Adobe Photoshop</li>
                <li>Figma</li>
                <li>Adobe Indisign</li>
                <li>CapCut</li>
              </ul>
              <h3>{t('Habilidades técnicas', 'Technical skills')}</h3>
              <ul className="lista-doble">
                <li>{t('Diseño Web', 'Web Design')}</li>
                <li>{t('Diseño Editorial', 'Editorial Design')}</li>
                <li>{t('Edición de video', 'Video editing')}</li>
                <li>{t('Piezas para redes', 'Social media pieces')}</li>
              </ul>
            </div>
            <div className="sobre__col sobre__col--contacto">
              <h3>{t('Contacto', 'Contact')}</h3>
              <Contacto />
              <Sociales />
            </div>
          </div>

          <div className="sobre__fila sobre__fila--experiencia">
            <h3>{t('Experiencia laboral', 'Work experience')}</h3>
            <div className="experiencia">
              <article>
                <h4>Hiper Agency</h4>
                <p className="periodo">{fecha('(Agosto 2025 - Actualidad)')}</p>
                <p>
                  {t(
                    'Creación de contenido visual para redes sociales, desarrollo de piezas gráficas alineadas a la identidad de marca, buscando comunicar conceptos de forma estética, estratégica y atractiva.',
                    'Creation of visual content for social media and development of graphic pieces aligned with the brand identity, seeking to communicate concepts in an aesthetic, strategic and appealing way.',
                  )}
                </p>
              </article>
              <article>
                <h4>Billabong</h4>
                <p className="periodo">{fecha('(Enero 2025 - Julio 2026)')}</p>
                <p>
                  {t(
                    'Pasante de diseño encargada de edición y retoque de fotografías, junto con el diseño y armado de catálogos mayoristas.',
                    'Design intern in charge of photo editing and retouching, along with the design and layout of wholesale catalogs.',
                  )}
                </p>
              </article>
              <article>
                <h4>Mina</h4>
                <p className="periodo periodo--normal">{t('(Emprendimiento personal)', '(Personal venture)')}</p>
                <p>
                  {t(
                    'Diseño y creación de papelería personalizada: tarjetas, flyers, álbumes, tarjetones y piezas gráficas adaptadas a cada cliente. (minaaa_dg)',
                    'Design and creation of custom stationery: cards, flyers, albums, greeting cards and graphic pieces adapted to each client. (minaaa_dg)',
                  )}
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="proyectos lineas" id="proyectos">
          <h2 className="proyectos__titulo">{t('Proyectos', 'Projects')}</h2>
          <div className="tarjetas proyectos__tarjetas">
            <TarjetaProyecto to="/papeleria" imagen="pap-sefina" nombre={t('Papelería', 'Stationery')} />
            <TarjetaProyecto to="/experimentacion" imagen="exp-grande" nombre={t('Experimentación', 'Experimentation')} />
            <TarjetaProyecto to="/diseno-digital" imagen="card-digital" nombre={t('Diseño digital', 'Digital design')} />
            <TarjetaProyecto to="/posters" imagen="bestias-2" nombre="Posters" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
