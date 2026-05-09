import { useState } from 'react'
import './App.css'
import Lista from './Lista'

function App() {
  
  return (
    <>
      <Lista></Lista>
      {/* <h1>estado: {luz ? "Encendido" : "Apagado"}</h1>
      <button className='button' onClick={handleLuz}>prender/aparga</button>
      <h1>{contador}</h1>
      <button className='button' onClick={handleClick}>Incrementar</button>
      <button className='button' onClick={restar}>Decrementar</button>
      <button className='button' onClick={Sumar5}>Incrementar 5</button>
      <button className='button' onClick={restar5}>Decrementar 5</button> */}
    </>
  )
  // const [luz, setLuz] = useState(true)

  // const handleLuz = () => {
  //   setLuz(!luz)
  // }

  // const [contador, setContador] = useState(0)

  // const handleClick = () => {
  //   setContador(contador + 1)
  // }

  // const restar = () => {
  //   if (contador > 0){
  //     setContador(contador - 1)
  //   }
  // }

  // const restar5 = () => {
  //   if (contador > 0){
  //     setContador(contador - 5)
  //   }
  // }
  
  // const Sumar5 = () => {
  //   setContador(contador + 5)
  // }
}

export default App
