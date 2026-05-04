export default function Productos({nombre, precio}) {
  return (
    <div>
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
    </div>
  )
}
