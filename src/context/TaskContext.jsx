import { createContext, useState, useEffect } from "react";
import {tareas} from '../data/Task';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tarea, settarea] = useState([]); // useState([tareas])

  function createTask(title, description) {
    const newTask = {
      id: tarea.length,
      title: title,
      description: description,
    };

    settarea([...tarea, newTask]);
  }

  function deleteTask(id) {
    settarea(tarea.filter((t) => t.id != id));
  }

  useEffect(() => {
    settarea(tareas);
  }, []);

  return (
    <>
      <TaskContext.Provider
        value={{
          task: tarea,
          deleteTask: deleteTask,
          createTask: createTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
}
