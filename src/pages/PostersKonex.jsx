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
          <strong className="afiche__rotulo">Objetivo:</strong> Atraer al público a través del encuadre de la mirada, transmitiendo la fuerza
          del color, la luz y la percepción sensorial. La propuesta busca que quien lo vea sienta la intensidad de
          experimentar el Konex, más allá de un evento en si, como una vivencia que transforma lo visible en
          emociones.
        </>,
        <>
          <strong className="afiche__rotulo">Goal:</strong> To attract the public through the framing of the gaze, conveying the strength of
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
          <strong className="afiche__rotulo">Objetivo:</strong> Atraer al público a través de lo sensorial, transmitiendo la energía del
          movimiento, el cuerpo, la experiencia de bailar y disfrutar.
          <br />
          La propuesta busca que quien lo vea sienta la emoción de vivir el Konex, más allá de un evento, si no
          también como una experiencia performática.
        </>,
        <>
          <strong className="afiche__rotulo">Goal:</strong> To attract the public through the senses, conveying the energy of movement, the
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
          <strong className="afiche__rotulo">Objetivo:</strong> Creé una <strong>intervención urbana en el abasto,</strong> lugar muy
          concurrido y a solo 400 mts del Konex. Elegí <strong>una frase que tenga un tono cercano</strong> en la
          que los jóvenes puedan sentirse identificados y genere cierta intriga, rematando con “A solo 400 mts” y
          la dirección.
        </>,
        <>
          <strong className="afiche__rotulo">Goal:</strong> I created an <strong>urban intervention at Abasto,</strong> a very busy place just
          400 m from the Konex. I chose <strong>a phrase with a friendly tone</strong> that young people can
          identify with and that creates some intrigue, finishing with “A solo 400 mts” and the address.
        </>,
      ),
      imagenes: [
        {
          name: 'konex-3',
          alt: t(
            'Cartel «Con el corazón roto, pero bailando un lunes. Estoy vibrando alto.» en el frente del Abasto Shopping',
            'Sign “Con el corazón roto, pero bailando un lunes. Estoy vibrando alto.” on the front of Abasto Shopping',
          ),
        },
      ],
    },
    {
      titulo: t('Afiche publicitario 2', 'Advertising poster 2'),
      nombre: 'Estás a punto de cambiar de frecuencia',
      ubicacion: t('Subte', 'Subway'),
      objetivo: t(
        <>
          <strong className="afiche__rotulo">Objetivo:</strong> Captar la atención del público y despertar curiosidad
          por el Konex, utilizando el contexto del subte para presentar Sarmiento 3131 como un destino a descubrir.
        </>,
        <>
          <strong className="afiche__rotulo">Goal:</strong> To capture the public's attention and spark curiosity
          about the Konex, using the subway context to present Sarmiento 3131 as a destination to discover.
        </>,
      ),
      imagenes: [
        {
          name: 'konex-4',
          alt: t(
            'Afiche «Próxima estación: Sarmiento 3131. Estás a punto de cambiar de frecuencia» en un vagón de subte',
            'Poster “Next station: Sarmiento 3131. You are about to change frequency” in a subway car',
          ),
        },
      ],
    },
  ]

  return (
    <div className="pagina">
      <Nav compacto />
      <main>
        <EscenarioAfiches fecha="*Noviembre 2025*" afiches={afiches} />
      </main>
      <Footer negro />
    </div>
  )
}
