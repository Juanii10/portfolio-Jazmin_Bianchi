import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Img from '../components/Img.jsx'
import { useIdioma } from '../idioma.jsx'

export default function PostersBorges() {
  const { t, fecha } = useIdioma()
  return (
    <div className="pagina">
      <Nav compacto />
      <main className="afiches afiches--borges">
        <p className="afiches__fecha">*{fecha('Julio 2024')}*</p>

        <section className="afiche afiche--1">
          <div className="afiche__texto">
            <h2 className="proyecto__titulo">[[ {t('Afiche 1', 'Poster 1')}</h2>
            <p className="proyecto__cliente">A ver Borges</p>
            <p className="afiche__objetivo">
              {t(
                'Una pieza promocional que utiliza la manzana como recurso visual central, vinculándola con el universo de Borges. La composición combina fotografía intervenida, tipografía y una estética experimental para generar impacto y despertar curiosidad.',
                "A promotional piece that uses the apple as its central visual resource, linking it with Borges's universe. The composition combines altered photography, typography and an experimental aesthetic to create impact and spark curiosity.",
              )}
            </p>
          </div>
          <div className="afiche__imgs">
            <Img
              name="borges-1"
              alt={t('Afiche «A ver Borges, contame más» de SOHO dB', 'Poster “A ver Borges, contame más” for SOHO dB')}
              eager
            />
          </div>
        </section>

        <section className="afiche afiche--2">
          <div className="afiche__texto">
            <h2 className="proyecto__titulo">[[ {t('Afiche 2', 'Poster 2')}</h2>
            <p className="proyecto__cliente">No seas Borges</p>
            <p className="afiche__objetivo">
              {t(
                'Una segunda interpretación que trabaja con la figura humana como protagonista, acompañada por una composición tipográfica dinámica. El uso del azul, el contraste y la superposición de elementos busca transmitir una propuesta más lúdica y desafiante.',
                'A second interpretation that works with the human figure as the protagonist, accompanied by a dynamic typographic composition. The use of blue, contrast and layered elements seeks to convey a more playful, challenging proposal.',
              )}
            </p>
          </div>
          <div className="afiche__imgs">
            <Img
              name="borges-2"
              alt={t('Afiche «No seas Borges, animate» de SOHO dB', 'Poster “No seas Borges, animate” for SOHO dB')}
            />
          </div>
        </section>
      </main>
      <Footer negro />
    </div>
  )
}
