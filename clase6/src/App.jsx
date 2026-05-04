import './App.css'
import Productos from './components/productos'

function App() {
  const Productos = [
    { nombre: 'manzana', precio: 5 },
    { nombre: 'aceite', precio: 20 },
    { nombre: 'mayonesa', precio: 15 },
    { nombre: 'pan', precio: 10 },
    { nombre: 'leche', precio: 30 },
  ];

  return (
    <>
      {
        Productos.map(({ id, nombre, precio }) => {
          return (
            <>
              <Productos key={id} nombre={nombre} precio={precio} />
            </>
          )
        })
      }
    </>
  )

}

export default App
