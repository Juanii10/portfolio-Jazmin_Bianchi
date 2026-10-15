import Carrusel from './Carrusel.jsx'
import TarjetaProyecto from './TarjetaProyecto.jsx'
import { useIdioma } from '../idioma.jsx'

// Tarjetas de proyectos: en pantallas anchas, la fila de siempre (se agranda la que está bajo el mouse); en
// celular, un carrusel como el de "Entre palabras" (ver Carrusel.jsx). Cada item: { to, imagen, nombre, posicion }.
export default function Tarjetas({ items, clase = '' }) {
  const { t } = useIdioma()
  return (
    <>
      <div className={`tarjetas ${clase}`}>
        {items.map((it) => (
          <TarjetaProyecto key={it.to} {...it} />
        ))}
      </div>
      <Carrusel
        items={items}
        etiqueta={t('Proyectos', 'Projects')}
        nombre={(it) => it.nombre}
        render={(it, rel) => <TarjetaProyecto {...it} tabIndex={rel === 0 ? undefined : -1} />}
      />
    </>
  )
}
