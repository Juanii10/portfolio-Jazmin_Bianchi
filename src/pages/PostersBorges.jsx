import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Img from '../components/Img.jsx'

export default function PostersBorges() {
  return (
    <div className="pagina">
      <Nav compacto />
      <main className="afiches afiches--borges">
        <p className="afiches__fecha">*Julio 2024*</p>

        <section className="afiche afiche--1">
          <div className="afiche__texto">
            <h2 className="proyecto__titulo">[[ Afiche 1</h2>
            <p className="proyecto__cliente">A ver Borges</p>
            <p className="afiche__objetivo">
              Una pieza promocional que utiliza la manzana como recurso visual central, vinculándola con el universo
              de Borges. La composición combina fotografía intervenida, tipografía y una estética experimental para
              generar impacto y despertar curiosidad.
            </p>
          </div>
          <div className="afiche__imgs">
            <Img name="borges-1" alt="Afiche «A ver Borges, contame más» de SOHO dB" eager />
          </div>
        </section>

        <section className="afiche afiche--2">
          <div className="afiche__texto">
            <h2 className="proyecto__titulo">[[ Afiche 2</h2>
            <p className="proyecto__cliente">No seas Borges</p>
            <p className="afiche__objetivo">
              Una segunda interpretación que trabaja con la figura humana como protagonista, acompañada por una
              composición tipográfica dinámica. El uso del azul, el contraste y la superposición de elementos busca
              transmitir una propuesta más lúdica y desafiante.
            </p>
          </div>
          <div className="afiche__imgs">
            <Img name="borges-2" alt="Afiche «No seas Borges, animate» de SOHO dB" />
          </div>
        </section>
      </main>
      <Footer negro />
    </div>
  )
}
