import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import EscenarioAfiches from '../components/EscenarioAfiches.jsx'
import { useIdioma } from '../idioma.jsx'

export default function PostersKonex() {
  const { t } = useIdioma()

  const afiches = [
    {
      titulo: t('Afiche 1', 'Poster 1'),
      nombre: 'Konex en tu mirada',
      ubicacion: t('Vía pública', 'Street advertising'),
      objetivo: t(
        <>
          <strong>Objetivo:</strong> Atraer al público a través del encuadre de la mirada, transmitiendo la fuerza
          del color, la luz y la percepción sensorial. La propuesta busca que quien lo vea sienta la intensidad de
          experimentar el Konex, más allá de un evento en si, como una vivencia que transforma lo visible en
          emociones.
        </>,
        <>
          <strong>Goal:</strong> To attract the public through the framing of the gaze, conveying the strength of
          color, light and sensory perception. The concept aims for whoever sees it to feel the intensity of
          experiencing the Konex, beyond an event, as an experience that turns the visible into emotions.
        </>,
      ),
      imagenes: [{ name: 'konex-1', alt: t('Afiche «Konex en tu mirada»', 'Poster “Konex en tu mirada”') }],
    },
    {
      titulo: t('Afiche 2', 'Poster 2'),
      nombre: 'Konex en vos',
      ubicacion: t('Vía pública', 'Street advertising'),
      objetivo: t(
        <>
          <strong>Objetivo:</strong> Atraer al público a través de lo sensorial, transmitiendo la energía del
          movimiento, el cuerpo, la experiencia de bailar y disfrutar.
          <br />
          La propuesta busca que quien lo vea sienta la emoción de vivir el Konex, más allá de un evento, si no
          también como una experiencia performática.
        </>,
        <>
          <strong>Goal:</strong> To attract the public through the senses, conveying the energy of movement, the
          body, the experience of dancing and enjoying.
          <br />
          The concept aims for whoever sees it to feel the thrill of living the Konex, beyond an event, also as a
          performative experience.
        </>,
      ),
      imagenes: [{ name: 'konex-2', alt: t('Afiche «Konex en vos»', 'Poster “Konex en vos”') }],
    },
    {
      titulo: t('Afiche publicitario 1', 'Advertising poster 1'),
      nombre: 'Con el corazón roto',
      ubicacion: 'Abasto Shopping',
      objetivo: t(
        <>
          <strong>Objetivo:</strong> Creé una <strong>intervención urbana en el abasto,</strong> lugar muy
          concurrido y a solo 400 mts del Konex. Elegí <strong>una frase que tenga un tono cercano</strong> en la
          que los jóvenes puedan sentirse identificados y genere cierta intriga, rematando con “A solo 400 mts” y
          la dirección.
        </>,
        <>
          <strong>Goal:</strong> I created an <strong>urban intervention at Abasto,</strong> a very busy place just
          400 m from the Konex. I chose <strong>a phrase with a friendly tone</strong> that young people can
          identify with and that creates some intrigue, finishing with “A solo 400 mts” and the address.
        </>,
      ),
      imagenes: [
        {
          name: 'konex-3',
          alt: t(
            'Pieza «Con el corazón roto, pero bailando un lunes. Estoy vibrando alto.»',
            'Piece “Con el corazón roto, pero bailando un lunes. Estoy vibrando alto.”',
          ),
        },
        {
          name: 'konex-4',
          alt: t('La pieza instalada como cartel frente al Abasto Shopping', 'The piece installed as a sign in front of Abasto Shopping'),
        },
      ],
    },
    {
      titulo: t('Afiche publicitario 1', 'Advertising poster 1'),
      nombre: 'Tu próxima parada',
      ubicacion: t('Estación Once', 'Once Station'),
      objetivo: t(
        <>
          <strong>Objetivo:</strong> Ubiqué una pieza de vía pública en la <strong>zona de la Estación Once,</strong>{' '}
          con el objetivo de invitar al público a visitar el Konex y ampliar su alcance. La propuesta{' '}
          <strong>aprovecha el alto flujo</strong> peatonal y vehicular del área, utilizando una gráfica impactante
          y un mensaje directo que transmite la energía y el espíritu transformador del espacio cultural.
        </>,
        <>
          <strong>Goal:</strong> I placed a street advertising piece in the <strong>Once Station area,</strong>{' '}
          in order to invite the public to visit the Konex and expand its reach. The concept{' '}
          <strong>takes advantage of the high pedestrian</strong> and vehicle flow of the area, using striking
          graphics and a direct message that conveys the energy and transformative spirit of the cultural space.
        </>,
      ),
      imagenes: [
        {
          name: 'konex-5',
          alt: t(
            'Pieza «Tu próxima parada está donde la energía se transforma»',
            'Piece “Tu próxima parada está donde la energía se transforma”',
          ),
        },
        {
          name: 'konex-6',
          alt: t('La pieza instalada como cartel en la zona de Estación Once', 'The piece installed as a sign in the Once Station area'),
        },
      ],
    },
  ]

  return (
    <div className="pagina">
      <Nav compacto />
      <main>
        <EscenarioAfiches fecha="*Noviembre 2025 *" afiches={afiches} />
      </main>
      <Footer negro />
    </div>
  )
}
