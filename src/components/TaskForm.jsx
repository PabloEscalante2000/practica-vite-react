import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext';

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const {createTask} = useContext(TaskContext)
  
  const handleSubmit = (e) => {
    console.log(title);
    console.log(description);
    createTask(title, description);
    setTitle("")
    setdescription("")
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <input
          placeholder="Escribe aqui la descripcion"
          onChange={(e) => {
            setdescription(e.target.value);
          }}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <button className="bg-indigo-500 p-4 text-white rounded-md">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
