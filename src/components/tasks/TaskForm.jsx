import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4 rounded-md"
      >
        <h1 className="text-2xl font-bold text-white mb-3">Añadir Tarea</h1>
        <input
          className="p-3 w-full mb-2 rounded text-zinc-700"
          placeholder="Escribe tu Tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="p-3 w-full mb-2 rounded text-zinc-700"
          placeholder="Descripción"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="py-2 w-full bg-indigo-500 text-white rounded">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
