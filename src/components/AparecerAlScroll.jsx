import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Los bloques que están más abajo de la pantalla no se ven al cargar: aparecen con un fundido (y un leve
// ascenso) cuando se llega a ellos al scrollear. Lo que ya está a la vista al entrar a la página no se toca,
// así que no hay parpadeos. Con "reducir movimiento" activado no se aplica nada y todo se ve desde el principio.
//
// Qué se anima y qué no se define acá; el aspecto (.aparece / .aparece--visible) está en styles.css.
const ANIMAR = [
  '.proyecto',
  '.exp-palabras__cabecera',
  '.frase',
  '.paleta',
  '.dig-banner__titulo',
  '.dig-redes__titulo',
  '.exp-slider',
  '.dig-reels',
  '.sobre__fila',
  '.proyectos__titulo',
  '.proyectos__tarjetas',
  '.home-frase__texto',
  '.home-frase__fondo',
  '.afiche__texto',
  '.posters-indice .tarjetas',
  '.footer__main',
  '.grabacion-web',
  '.dig-bebidas__fig',
  'main img',
].join(',')

// Cosas con animación propia o que no tiene sentido ocultar.
const EXCLUIR = '.hero, .home-hero, .konex, .tarjeta, .reel, .exp-slider__foto, nav, header'

export default function AparecerAlScroll() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observador = new IntersectionObserver(
      (entradas) => {
        // Los que aparecen a la vez entran escalonados, uno tras otro.
        let orden = 0
        entradas.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.style.transitionDelay = `${Math.min(orden++, 4) * 90}ms`
          e.target.classList.add('aparece--visible')
          observador.unobserve(e.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -4% 0px' },
    )

    // Se espera un instante para que termine de acomodarse el scroll (anclas, vuelta arriba) antes de decidir
    // qué ya está a la vista.
    const espera = setTimeout(() => {
      document.querySelectorAll(ANIMAR).forEach((el) => {
        if (el.dataset.aparece || el.closest(EXCLUIR)) return
        // La grilla de Bebidas y el celular que asoma arriba aparecen juntos (se anima la figura entera).
        if (el.matches('.dig-bebidas__fig img')) return
        el.dataset.aparece = '1'
        const r = el.getBoundingClientRect()
        // Ya se ve: se deja como está. La foto de fondo de la frase asoma apenas debajo del hero, así que cuenta
        // como "ya vista" solo si está bastante adentro de la pantalla.
        const limite = el.matches('.home-frase__fondo') ? 0.4 : 0.92
        if (r.bottom > 0 && r.top < window.innerHeight * limite) return
        el.classList.add('aparece')
        observador.observe(el)
      })
    }, 60)

    return () => {
      clearTimeout(espera)
      observador.disconnect()
    }
  }, [pathname])

  return null
}
