import React, { useState } from 'react'

export default function Lista() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState("")
    const [filter, setFilter] = useState('todas')

    const handleAgregar = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, { id: Date.now(), tarea: task.trim(), completado: false }])
            setTask("")
        } else {
            alert("Ingrese una tarea")
        }
    }

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleEliminar = (id) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    const handleCompletado = (taskToToggle) => {
        setTasks(tasks.map(t => {
            if (t.id === taskToToggle.id) {
                return { ...t, completado: !t.completado }
            }
            return t
        }))
    }

    const visibleTasks = tasks.filter(t => {
        if (filter === 'completado') return t.completado
        if (filter === 'pendiente') return !t.completado
        return true
    })

  return (
    <div>
      <input className='Tareas' type="text" value={task} onChange={handleChange}/>
      <button className='button' onClick={handleAgregar}>Agregar</button>

      {
        visibleTasks.map(t => (
          <p className='task' key={t.id}>
            nombre: {t.tarea} completada: {t.completado ? "Sí" : "No"}
            <button className='completado' onClick={() => handleCompletado(t)}>Si/No</button>
            <button className='btnEliminar' onClick={() => handleEliminar(t.id)}>X</button>
          </p>
        ))
      }

        <br></br>
        <br></br>
      <button className='completado' onClick={() => setFilter('completado')}>Tareas Completadas</button>
      <button className='btnEliminar' onClick={() => setFilter('pendiente')}>Tareas Pendientes</button>
      <button className='button' onClick={() => setFilter('todas')}>Mostrar Todas</button>
    </div>
  )
}
