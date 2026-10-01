import sizes from '../images.json'

// Imagen recortada del diseño (public/img/<name>.jpg). Toma el tamaño de images.json
// para reservar el espacio y evitar saltos de layout.
export default function Img({ name, alt = '', className, style, eager = false }) {
  const size = sizes[name]
  return (
    <img
      className={className}
      style={style}
      src={`${import.meta.env.BASE_URL}img/${name}.jpg`}
      width={size?.w}
      height={size?.h}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
