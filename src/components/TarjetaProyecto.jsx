import { Link } from 'react-router-dom'
import Img from './Img.jsx'

// Tarjeta vertical con la imagen desenfocada y el nombre encima (home e índice de posters).
export default function TarjetaProyecto({ to, imagen, nombre, posicion = 'center' }) {
  return (
    <Link className="tarjeta" to={to}>
      <Img name={imagen} style={{ objectPosition: posicion }} />
      <span className="tarjeta__nombre">{nombre}</span>
    </Link>
  )
}
