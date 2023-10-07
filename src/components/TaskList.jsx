import React,{useContext} from "react";
import TaskCard from "./TaskCard";
import {TaskContext} from '../context/TaskContext';

function TaskList() {

  const {task} = useContext(TaskContext)

  if (task.length === 0) return <h1 className="text-white text-4xl text-center">no hay tareas</h1>;

  return (
    <div className="grid grid-cols-4 gap-2">
      {task.map((t) => (
        <TaskCard task={t} key={t.id} />
      ))}
    </div>
  );
}

export default TaskList;
