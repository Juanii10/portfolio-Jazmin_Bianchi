import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Img from '../components/Img.jsx'

function Detalle({ titulo, nombre, ubicacion, children }) {
  return (
    <div className="afiche__texto">
      <h2 className="proyecto__titulo">[[ {titulo}</h2>
      <p className="proyecto__cliente">{nombre}</p>
      <p className="afiche__ubicacion"><strong>Ubicación:</strong> {ubicacion}</p>
      <p className="afiche__objetivo">{children}</p>
    </div>
  )
}

export default function PostersKonex() {
  return (
    <div className="pagina">
      <Nav compacto />
      <main className="afiches afiches--konex">
        <p className="afiches__fecha">*Noviembre 2025 *</p>

        <section className="afiche afiche--1">
          <Detalle titulo="Afiche 1" nombre="Konex en tu mirada" ubicacion="Vía pública">
            <strong>Objetivo:</strong> Atraer al público a través del encuadre de la mirada, transmitiendo la fuerza
            del color, la luz y la percepción sensorial. La propuesta busca que quien lo vea sienta la intensidad de
            experimentar el Konex, más allá de un evento en si, como una vivencia que transforma lo visible en
            emociones.
          </Detalle>
          <div className="afiche__imgs">
            <Img className="w635" name="konex-1" alt="Afiche «Konex en tu mirada»" eager />
          </div>
        </section>

        <section className="afiche afiche--2">
          <Detalle titulo="Afiche 2" nombre="Konex en vos" ubicacion="Vía pública">
            <strong>Objetivo:</strong> Atraer al público a través de lo sensorial, transmitiendo la energía del
            movimiento, el cuerpo, la experiencia de bailar y disfrutar.
            <br />
            La propuesta busca que quien lo vea sienta la emoción de vivir el Konex, más allá de un evento, si no
            también como una experiencia performática.
          </Detalle>
          <div className="afiche__imgs">
            <Img className="w635" name="konex-2" alt="Afiche «Konex en vos»" />
          </div>
        </section>

        <section className="afiche afiche--3">
          <Detalle titulo="Afiche publicitario 1" nombre="Con el corazón roto" ubicacion="Abasto Shopping">
            <strong>Objetivo:</strong> Creé una <strong>intervención urbana en el abasto,</strong> lugar muy
            concurrido y a solo 400 mts del Konex. Elegí <strong>una frase que tenga un tono cercano</strong> en la
            que los jóvenes puedan sentirse identificados y genere cierta intriga, rematando con “A solo 400 mts” y
            la dirección.
          </Detalle>
          <div className="afiche__imgs">
            <Img name="konex-3" alt="Pieza «Con el corazón roto, pero bailando un lunes. Estoy vibrando alto.»" />
            <Img name="konex-4" alt="La pieza instalada como cartel frente al Abasto Shopping" />
          </div>
        </section>

        <section className="afiche afiche--4">
          <Detalle titulo="Afiche publicitario 1" nombre="Tu próxima parada" ubicacion="Estación Once">
            <strong>Objetivo:</strong> Ubiqué una pieza de vía pública en la <strong>zona de la Estación Once,</strong>{' '}
            con el objetivo de invitar al público a visitar el Konex y ampliar su alcance. La propuesta{' '}
            <strong>aprovecha el alto flujo</strong> peatonal y vehicular del área, utilizando una gráfica impactante
            y un mensaje directo que transmite la energía y el espíritu transformador del espacio cultural.
          </Detalle>
          <div className="afiche__imgs">
            <Img name="konex-5" alt="Pieza «Tu próxima parada está donde la energía se transforma»" />
            <Img name="konex-6" alt="La pieza instalada como cartel en la zona de Estación Once" />
          </div>
        </section>
      </main>
      <Footer negro />
    </div>
  )
}
