import React, { useContext } from 'react'
import {TaskContext} from '../context/TaskContext';

function TaskCard({task}) {

  // const valor = useContext(TaskContext)
  // console.log(valor)

  const {deleteTask} = useContext(TaskContext)
  
  return (
      <ul className='bg-gray-800 text-white p-4 rounded-md'>
        <li>{task.id}</li>
        <li className='text-xl font-bold capitalize'>{task.title}</li>
        <li className='text-gray-500 text-sm'>{task.description}</li>
        <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400' onClick={()=>{
          deleteTask(task.id)
        }}>Eliminar Tarea</button>
    </ul>
  )
}

export default TaskCard