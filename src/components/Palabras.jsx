import { Children, Fragment, cloneElement, isValidElement } from 'react'

// Envuelve cada palabra del texto en un <span class="palabra" style="--i: n"> para poder animarlas de
// a una (ver .konex__texto .palabra en styles.css). Respeta los elementos intermedios (<strong>, <br>).
export default function Palabras({ children, desde = 0 }) {
  let n = desde

  const recorrer = (nodo) =>
    Children.map(nodo, (hijo) => {
      if (typeof hijo === 'string') {
        return hijo.split(/(\s+)/).map((trozo, i) =>
          trozo === '' || /^\s+$/.test(trozo) ? (
            <Fragment key={i}>{trozo}</Fragment>
          ) : (
            <span key={i} className="palabra" style={{ '--i': n++ }}>
              {trozo}
            </span>
          ),
        )
      }
      if (isValidElement(hijo) && hijo.type !== 'br' && hijo.props.children !== undefined) {
        return cloneElement(hijo, undefined, recorrer(hijo.props.children))
      }
      return hijo
    })

  return <>{recorrer(children)}</>
}
