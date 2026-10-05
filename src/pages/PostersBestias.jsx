import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Img from '../components/Img.jsx'
import { useIdioma } from '../idioma.jsx'

export default function PostersBestias() {
  const { t, fecha } = useIdioma()
  return (
    <div className="pagina">
      <Nav compacto />
      <main className="afiches afiches--bestias">
        <p className="afiches__fecha">*{fecha('Agosto 2024')}*</p>

        <section className="afiche afiche--1">
          <div className="afiche__texto">
            <h2 className="proyecto__titulo">[[ {t('Afiche y poster publicitario', 'Poster and advertising poster')}</h2>
            <p className="proyecto__cliente">Las Bestias</p>
            <p className="afiche__objetivo">
              {t(
                'Desarrollo de una propuesta gráfica para Las Bestias, una banda de rock independiente que buscaba comunicar su show a un público joven, eléctrico y enérgico. La identidad se construye a partir de colores vibrantes, tipografía de alto impacto y recursos gráficos experimentales, buscando transmitir la intensidad y actitud de la banda.',
                "Development of a graphic concept for Las Bestias, an independent rock band that wanted to promote its show to a young, electric and energetic audience. The identity is built from vibrant colors, high-impact typography and experimental graphic resources, seeking to convey the band's intensity and attitude.",
              )}
            </p>
          </div>
          <div className="afiche__imgs">
            <Img name="bestias-1" alt={t('Afiche de Las Bestias en Club Lucille', 'Las Bestias poster at Club Lucille')} eager />
          </div>
        </section>

        <Img
          className="a-ancho"
          name="bestias-2"
          alt={t(
            'Próxima fecha: 04/07 en Club Lucille. Las Bestias, viví la experiencia.',
            'Next date: 04/07 at Club Lucille. Las Bestias, live the experience.',
          )}
        />
      </main>
      <Footer negro />
    </div>
  )
}
