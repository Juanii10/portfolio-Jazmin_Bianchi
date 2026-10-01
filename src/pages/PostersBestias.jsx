import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Img from '../components/Img.jsx'

export default function PostersBestias() {
  return (
    <div className="pagina">
      <Nav compacto />
      <main className="afiches afiches--bestias">
        <p className="afiches__fecha">*Agosto 2024*</p>

        <section className="afiche afiche--1">
          <div className="afiche__texto">
            <h2 className="proyecto__titulo">[[ Afiche y poster publicitario</h2>
            <p className="proyecto__cliente">Las Bestias</p>
            <p className="afiche__objetivo">
              Desarrollo de una propuesta gráfica para Las Bestias, una banda de rock independiente que buscaba
              comunicar su show a un público joven, eléctrico y enérgico. La identidad se construye a partir de
              colores vibrantes, tipografía de alto impacto y recursos gráficos experimentales, buscando transmitir
              la intensidad y actitud de la banda.
            </p>
          </div>
          <div className="afiche__imgs">
            <Img name="bestias-1" alt="Afiche de Las Bestias en Club Lucille" eager />
          </div>
        </section>

        <Img className="a-ancho" name="bestias-2" alt="Próxima fecha: 04/07 en Club Lucille. Las Bestias, viví la experiencia." />
      </main>
      <Footer negro />
    </div>
  )
}
