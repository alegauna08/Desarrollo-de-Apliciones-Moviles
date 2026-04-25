// export default function kiosco({producto, stock, precio}) {
//   return (
//     <div className = "kiosco">
//       <h2 className="producto">Producto: {producto}</h2>
//       <p>Stock: {stock}</p>
//       <p>Precio: $ {precio}</p>
//     </div>
//   )
// }
export default function Persona ({ser}) {
    return (
        <h3>[{ser.nombre}, {ser.edad}, {ser.dni}]</h3>
    )
}