import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import EscenarioAfiches from '../components/EscenarioAfiches.jsx'

const AFICHES = [
  {
    titulo: 'Afiche 1',
    nombre: 'Konex en tu mirada',
    ubicacion: 'Vía pública',
    objetivo: (
      <>
        <strong>Objetivo:</strong> Atraer al público a través del encuadre de la mirada, transmitiendo la fuerza
        del color, la luz y la percepción sensorial. La propuesta busca que quien lo vea sienta la intensidad de
        experimentar el Konex, más allá de un evento en si, como una vivencia que transforma lo visible en
        emociones.
      </>
    ),
    imagenes: [{ name: 'konex-1', alt: 'Afiche «Konex en tu mirada»' }],
  },
  {
    titulo: 'Afiche 2',
    nombre: 'Konex en vos',
    ubicacion: 'Vía pública',
    objetivo: (
      <>
        <strong>Objetivo:</strong> Atraer al público a través de lo sensorial, transmitiendo la energía del
        movimiento, el cuerpo, la experiencia de bailar y disfrutar.
        <br />
        La propuesta busca que quien lo vea sienta la emoción de vivir el Konex, más allá de un evento, si no
        también como una experiencia performática.
      </>
    ),
    imagenes: [{ name: 'konex-2', alt: 'Afiche «Konex en vos»' }],
  },
  {
    titulo: 'Afiche publicitario 1',
    nombre: 'Con el corazón roto',
    ubicacion: 'Abasto Shopping',
    objetivo: (
      <>
        <strong>Objetivo:</strong> Creé una <strong>intervención urbana en el abasto,</strong> lugar muy
        concurrido y a solo 400 mts del Konex. Elegí <strong>una frase que tenga un tono cercano</strong> en la
        que los jóvenes puedan sentirse identificados y genere cierta intriga, rematando con “A solo 400 mts” y
        la dirección.
      </>
    ),
    imagenes: [
      { name: 'konex-3', alt: 'Pieza «Con el corazón roto, pero bailando un lunes. Estoy vibrando alto.»' },
      { name: 'konex-4', alt: 'La pieza instalada como cartel frente al Abasto Shopping' },
    ],
  },
  {
    titulo: 'Afiche publicitario 1',
    nombre: 'Tu próxima parada',
    ubicacion: 'Estación Once',
    objetivo: (
      <>
        <strong>Objetivo:</strong> Ubiqué una pieza de vía pública en la <strong>zona de la Estación Once,</strong>{' '}
        con el objetivo de invitar al público a visitar el Konex y ampliar su alcance. La propuesta{' '}
        <strong>aprovecha el alto flujo</strong> peatonal y vehicular del área, utilizando una gráfica impactante
        y un mensaje directo que transmite la energía y el espíritu transformador del espacio cultural.
      </>
    ),
    imagenes: [
      { name: 'konex-5', alt: 'Pieza «Tu próxima parada está donde la energía se transforma»' },
      { name: 'konex-6', alt: 'La pieza instalada como cartel en la zona de Estación Once' },
    ],
  },
]

export default function PostersKonex() {
  return (
    <div className="pagina">
      <Nav compacto />
      <main>
        <EscenarioAfiches fecha="*Noviembre 2025 *" afiches={AFICHES} />
      </main>
      <Footer negro />
    </div>
  )
}
