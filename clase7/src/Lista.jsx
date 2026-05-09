import React, { useState } from 'react'

export default function Lista() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState("")

    const handleAgregar = (e) => {
        if (task !== ""){
            setTasks([...tasks, {id: Date.now(), tarea: task}])
            console.log(tasks)
        } else {
            alert("Ingrese una tarea")
        }
    }
    
    const handleChange = (e) => {
        setTask(e.target.value)
    }
    
    const handleEliminar = (e) => {
        setTasks(tasks.filter( t => t.id !== e))
    }
    
  return (
    <div>
      <input className='Tareas' type="text" onChange={e => handleChange(e)} />
      <button className='button' onClick={handleAgregar}>Agregar</button>
        {
            tasks.map( t => <p className='task' key={t.id}>nombre: {t.tarea} entregado: {t.entregado ? "Sí" : "No"} <button className='btnEliminar' onClick={() => handleEliminar(t.id)}>X</button></p>)
        }
    </div>
  )
}
