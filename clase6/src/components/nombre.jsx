export default function Nombre({ children, foto, datos}) {
    return (
    <div className="planilla">
        <h2 className="texto">{children}</h2>
        <h3 className="texto">{datos.edad}</h3>
        <h3 className="texto">{datos.ciudad}</h3>
        <h3 className="texto">{datos.pais}</h3>
        <img className="imagen" src={foto} />
    </div>
  )
}