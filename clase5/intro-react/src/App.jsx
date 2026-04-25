import './App.css'
// import Musica from './components/musica';
// import {Saludar} from './components/saludar';
// import Kiosco from './components/nuevo';
import Persona from './components/nuevo';


function App() {
  return (
    <>
      <Persona ser = {{nombre: "Axel", edad: 17, dni: 12345678}} />
    {/* 
      <Musica />

      <Saludar /> */}
      {/* <Kiosco producto="Gaseosa" stock={10} precio={1500} />
      <Kiosco producto="Papas Fritas" stock={20} precio={900} />
      <Kiosco producto="Galletitas" stock={50} precio={250} /> */}
    </>
  )
}

export default App
