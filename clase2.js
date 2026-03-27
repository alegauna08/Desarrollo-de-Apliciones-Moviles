const productos = [
    {
        id: 1,
        nombre: "Camiseta",
        precio: 20
    },
    {
        id: 2,
        nombre: "Pantalón",
        precio: 40
    },
    {
        id: 3,
        nombre: "Zapatos",
        precio: 60
    },
    {
        id: 4,
        nombre: "Gorra",
        precio: 10
    }
]

const productosHTML = productos.map(producto => {
    return `
    <h3> id: ${producto.id} </h3> 
    <h1> nombre: ${producto.nombre} </h1> 
    <h3> precio: ${producto.precio} </h3>
    `
})
document.getElementById("lista-productos").innerHTML = productosHTML.join('')

let productoBuscado = document.getElementById("buscar")
let botonBuscar = document.getElementById("botonBuscar")
let resetear = document.getElementById("resetear")

botonBuscar.addEventListener("click", (e) => {
    e.preventDefault()
    const prodEncontrado = productos.filter(producto => producto.nombre === productoBuscado.value)
    document.getElementById("lista-productos").innerHTML = prodEncontrado.map(producto => `<h3> id: ${producto.id} </h3> <h1> nombre: ${producto.nombre} </h1> <h3> precio: ${producto.precio} </h3>`).join("")
})
resetear.addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById("lista-productos").innerHTML = productosHTML.join('')
})
/*
Imperativo vs Declarativo: El imperativo detalla el"como" (bucle for clasico). 
El declarativo expresa el "que" (metodos map)
Generar HTML con map(): Iteramos un array de objetos, retormamos un string de HTML por cada uno, y usamos
.join("") para convertir ese nuevo array en un inico bloque de texto listo para iyectar en el DOM
*/