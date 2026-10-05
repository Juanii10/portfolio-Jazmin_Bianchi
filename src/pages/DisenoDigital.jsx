import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import Img from '../components/Img.jsx'
import Proyecto from '../components/Proyecto.jsx'
import ReelsMarcas from '../components/ReelsMarcas.jsx'
import { useIdioma } from '../idioma.jsx'

// Los 3 reels de cada marca: public/video/reels/<clave>-<n>.mp4 (+ .jpg de portada), que genera
// `node tools/comprimir_reels.mjs` a partir de los originales del Drive.
const reelsDe = (clave, nombre, t) =>
  [1, 2, 3].map((n) => ({
    video: `video/reels/${clave}-${n}.mp4`,
    poster: `video/reels/${clave}-${n}.jpg`,
    alt: t(`Reel ${n} de ${nombre}`, `${nombre} reel ${n}`),
  }))

// Botones dibujados en la parte de arriba de la imagen del hero (caja en px de la imagen de 2444 x 1198).
const ENLACES = [
  { es: 'Piezas para redes', en: 'Social media pieces', href: '#piezas-para-redes', caja: [173, 107, 567, 173] },
  { es: 'Banners Web', en: 'Web Banners', href: '#banners-web', caja: [789, 107, 1183, 173] },
  { es: 'Edición de reels', en: 'Reel editing', href: '#edicion-de-reels', caja: [1365, 107, 1758, 173] },
  { es: 'Diseño web', en: 'Web design', href: '#diseno-web', caja: [1935, 107, 2328, 173] },
]

export default function DisenoDigital() {
  const { t } = useIdioma()

  // Marcas de la sección "Edición de reels". Cada una cambia el nombre, la fecha y los celulares.
  const marcas = [
    { nombre: 'Cuan Arquitectura', fecha: 'Julio 2025 - Actualidad', reels: reelsDe('cuan', 'Cuan Arquitectura', t) },
    { nombre: 'Erasmo', fecha: 'Julio 2026 - Actualidad', reels: reelsDe('erasmo', 'Erasmo', t) },
    { nombre: 'Visionar Coaching', fecha: 'Abril 2026 - Actualidad', reels: reelsDe('visionar', 'Visionar Coaching', t) },
    { nombre: 'Caterina Beauty Studio', fecha: 'Julio 2026 - Actualidad', reels: reelsDe('caterina', 'Caterina Beauty Studio', t) },
  ]

  return (
    <div className="pagina">
      <Nav />
      <main>
        <div className="marco-hero">
          <Hero
            imagen="dig-hero"
            titulo={t('Diseño digital — Donde pienso, creo y resuelvo', 'Digital design — Where I think, create and solve')}
            flecha={[49.98, 85.64]}
            enlaces={ENLACES.map(({ es, en, ...resto }) => ({ etiqueta: t(es, en), ...resto }))}
          />
        </div>

        <div id="contenido">
          {/* Piezas para redes */}
          <section className="sec sec--negra dig-redes" id="piezas-para-redes">
            <h2 className="proyecto__titulo dig-redes__titulo">[[ {t('Piezas para redes', 'Social media pieces')}</h2>
            <div className="dig-redes__grid">
              <Proyecto cliente="Visionar Coaching" fecha="Abril 2025 - Actualidad" className="dig-texto">
                <p>
                  {t(
                    'Desarrollo de un sistema visual para redes, combinando violetas y rosados, tipografía, formas y texturas para crear piezas variadas que mantienen una identidad coherente y reconocible.',
                    'Development of a visual system for social media, combining violets and pinks, typography, shapes and textures to create varied pieces that keep a coherent, recognizable identity.',
                  )}
                </p>
              </Proyecto>
              <Img
                className="dig-redes__grilla"
                name="dig-visionar-grilla"
                alt={t('Nueve publicaciones de Visionar Coaching en violeta y rosa', 'Nine Visionar Coaching posts in violet and pink')}
              />
              <Img
                className="dig-redes__celu"
                name="dig-visionar-celu"
                alt={t('Perfil de Instagram visionar.coaching en un celular', 'Instagram profile visionar.coaching on a phone')}
              />
            </div>
            <Img
              className="a-ancho dig-redes__stories"
              name="dig-visionar-stories"
              alt={t('Seis stories de Interaktell para Visionar', 'Six Interaktell stories for Visionar')}
            />
          </section>

          {/* Siempre Bebidas Caballito */}
          <section className="sec sec--crema dig-bebidas">
            <Proyecto cliente="Siempre Bebidas Caballito" fecha="Agosto 2025 - Junio 2026" className="dig-texto">
              <p>
                {t(
                  'Diseño de contenido digital, creé una línea visual dinámica a partir de fotografía de producto, tipografía de alto impacto y recursos gráficos. La propuesta busca comunicar promociones, eventos y contenidos de manera clara, manteniendo una identidad adaptable a distintos formatos.',
                  'Digital content design: I created a dynamic visual line from product photography, high-impact typography and graphic elements. The concept aims to communicate promotions, events and content clearly, keeping an identity that adapts to different formats.',
                )}
              </p>
            </Proyecto>
            <div className="dig-bebidas__fig">
              <Img className="dig-bebidas__tope" name="dig-bebidas-celu-tope" alt="" />
              <Img
                name="dig-bebidas-grilla"
                alt={t(
                  'Publicaciones de Siempre Bebidas Caballito: cata de vinos, cata de cervezas, brindis por el amor, recetas y sorteos',
                  'Siempre Bebidas Caballito posts: wine tasting, beer tasting, a toast to love, recipes and giveaways',
                )}
              />
            </div>
          </section>

          {/* Caterina + Banner Web + Edición de reels */}
          <section className="sec sec--negra dig-caterina">
            <div className="dig-redes__grid dig-redes__grid--caterina">
              <Proyecto cliente="Caterina Beauty Studio" fecha="Julio 2025 - Actualidad" className="dig-texto">
                <p>
                  {t(
                    'Construí una estética femenina y delicada a través de fotografía, tipografía y una paleta de rosas. Las piezas combinan información y recursos visuales para comunicar servicios, productos y contenidos de forma atractiva.',
                    'I built a feminine, delicate aesthetic through photography, typography and a palette of pinks. The pieces combine information and visual resources to communicate services, products and content in an appealing way.',
                  )}
                </p>
              </Proyecto>
              <Img
                className="dig-redes__grilla"
                name="dig-caterina-grilla"
                alt={t('Publicaciones de Caterina Beauty Studio', 'Caterina Beauty Studio posts')}
              />
              <Img
                className="dig-redes__celu"
                name="dig-caterina-celu"
                alt={t('Perfil de Instagram caterina.beautystudio en un celular', 'Instagram profile caterina.beautystudio on a phone')}
              />
            </div>

            <h2 className="proyecto__titulo dig-banner__titulo" id="banners-web">[[ {t('Banner Web', 'Web Banner')}</h2>
            <Img
              className="a-ancho dig-banner"
              name="dig-banner-mueblin"
              alt={t(
                'Mueblin Hogar 2025: banner web «¡El estilo de tu hogar lo podés encontrar aquí!» en notebook y celular',
                'Mueblin Hogar 2025: web banner “¡El estilo de tu hogar lo podés encontrar aquí!” on a laptop and phone',
              )}
            />
            <Img
              className="a-ancho dig-banner dig-banner--2"
              name="dig-banner-comardex"
              alt={t('Comardex 2025: banner web «Productos 100% originales»', 'Comardex 2025: web banner “Productos 100% originales”')}
            />
          </section>

          <section className="sec sec--negra dig-reels" id="edicion-de-reels">
            <ReelsMarcas titulo={t('Edición de reels', 'Reel editing')} marcas={marcas} />
          </section>

          {/* Diseño web */}
          <section className="sec sec--crema dig-web" id="diseno-web">
            <div className="dig-web__cabecera">
              <Proyecto titulo={t('Diseño web', 'Web design')} cliente="Sabores + Esquinas" fecha="Julio 2024">
                <p>
                  {t(
                    'Desarrollo de la identidad visual de un micrositio editorial, explorando una estética fresca y cercana a través de color, tipografía, fotografía y recursos gráficos.',
                    'Development of the visual identity of an editorial microsite, exploring a fresh, friendly aesthetic through color, typography, photography and graphic resources.',
                  )}
                </p>
              </Proyecto>
              <Img
                name="dig-uikit"
                alt={t(
                  'UI Kit de Sabores + Esquinas: fuente Montserrat, paleta de colores, iconografía, botones y filtros',
                  'Sabores + Esquinas UI Kit: Montserrat font, color palette, iconography, buttons and filters',
                )}
              />
            </div>

            <div className="dig-web__bloque">
              <Proyecto cliente={t('Micrositio', 'Microsite')} className="dig-texto dig-texto--ancho">
                <p>
                  {t(
                    'Micrositio de un diario digital ficticio dedicado a descubrir qué hacer en Corrientes, con foco en su gastronomía y cultura. Reúne recetas, restaurantes, productos típicos y experiencias para explorar la identidad culinaria de la provincia.',
                    'Microsite of a fictional digital newspaper dedicated to discovering what to do in Corrientes, focused on its gastronomy and culture. It brings together recipes, restaurants, typical products and experiences to explore the culinary identity of the province.',
                  )}
                </p>
              </Proyecto>
            </div>
            <Img
              className="a-ancho"
              name="dig-micrositio-1"
              alt={t(
                'Micrositio Sabores + Esquinas en monitor y celular: «Aventura semanal — Ruta de la yerba mate»',
                'Sabores + Esquinas microsite on a monitor and phone: “Aventura semanal — Ruta de la yerba mate”',
              )}
            />

            <div className="dig-web__bloque">
              <Proyecto cliente={t('Artículo', 'Article')} className="dig-texto dig-texto--ancho">
                <p>
                  {t(
                    'Una de las secciones del micrositio lleva la exploración gastronómica a una receta concreta. El artículo presenta el plato, sus ingredientes y su preparación, manteniendo el lenguaje visual y editorial de La Corriente.',
                    "One of the microsite's sections takes the gastronomic exploration to a specific recipe. The article presents the dish, its ingredients and its preparation, keeping the visual and editorial language of La Corriente.",
                  )}
                </p>
              </Proyecto>
            </div>
            <Img
              className="a-ancho"
              name="dig-micrositio-2"
              alt={t(
                'Artículo «Pacú al horno con salsa verde y puré de calabaza» en monitor y celular',
                'Article “Pacú al horno con salsa verde y puré de calabaza” on a monitor and phone',
              )}
            />
          </section>
        </div>
        <div className="relleno-negro" aria-hidden="true" />
      </main>
      <Footer negro />
    </div>
  )
}
