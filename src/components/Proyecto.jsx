// Bloque de texto de un proyecto: [[ Título, cliente (rosa), descripción y fecha.
export default function Proyecto({ titulo, cliente, children, fecha, className = '', tag: Tag = 'h2' }) {
  return (
    <div className={`proyecto ${className}`}>
      {titulo && <Tag className="proyecto__titulo">[[ {titulo}</Tag>}
      {cliente && <p className="proyecto__cliente">{cliente}</p>}
      {children && <div className="proyecto__texto">{children}</div>}
      {fecha && <p className="proyecto__fecha">*{fecha}*</p>}
    </div>
  )
}
