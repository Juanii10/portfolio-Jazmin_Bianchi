import { createContext, useContext, useEffect, useMemo, useState } from 'react'

// Idioma del sitio: español (por defecto) o inglés. El botón del header ("Español" / "English") lo alterna y
// la elección se recuerda en este navegador.
//
// Uso en los componentes:
//   const { t, fecha } = useIdioma()
//   t('Hola', 'Hello')                     -> texto según el idioma (también sirve con JSX: t(<>..</>, <>..</>))
//   fecha('Julio 2025 - Actualidad')       -> 'July 2025 - Present'
const CLAVE = 'idioma'

const MESES = {
  Enero: 'January',
  Febrero: 'February',
  Marzo: 'March',
  Abril: 'April',
  Mayo: 'May',
  Junio: 'June',
  Julio: 'July',
  Agosto: 'August',
  Septiembre: 'September',
  Octubre: 'October',
  Noviembre: 'November',
  Diciembre: 'December',
}
const RE_FECHA = new RegExp(`\\b(${Object.keys(MESES).join('|')}|Actualidad)\\b`, 'g')

const DESCRIPCION = {
  es: 'Portfolio 2026 de Jazmín Bianchi, diseñadora gráfica: papelería, experimentación, diseño digital y posters.',
  en: "Jazmín Bianchi's 2026 portfolio. Graphic designer: stationery, experimentation, digital design and posters.",
}

const Contexto = createContext({
  lang: 'es',
  alternar: () => {},
  t: (es) => es,
  fecha: (s) => s,
})

const inicial = () => {
  try {
    const guardado = localStorage.getItem(CLAVE)
    if (guardado === 'es' || guardado === 'en') return guardado
  } catch {
    /* sin almacenamiento: queda en español */
  }
  return 'es'
}

export function IdiomaProvider({ children }) {
  const [lang, setLang] = useState(inicial)

  useEffect(() => {
    document.documentElement.lang = lang
    document.querySelector('meta[name="description"]')?.setAttribute('content', DESCRIPCION[lang])
    try {
      localStorage.setItem(CLAVE, lang)
    } catch {
      /* ignorar */
    }
  }, [lang])

  const valor = useMemo(
    () => ({
      lang,
      alternar: () => setLang((l) => (l === 'es' ? 'en' : 'es')),
      t: (es, en) => (lang === 'en' ? en : es),
      fecha: (s) => (lang === 'en' ? s.replace(RE_FECHA, (m) => MESES[m] ?? 'Present') : s),
    }),
    [lang],
  )

  return <Contexto.Provider value={valor}>{children}</Contexto.Provider>
}

export const useIdioma = () => useContext(Contexto)
