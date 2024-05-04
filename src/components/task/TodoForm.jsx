import React, { useState } from "react";
import { postTask } from "../../services/api.jsx";
import { handleAddTodo as metod } from "../../pages/task/TaskPage.jsx";

export const TodoForm = ({ onAddTodo }) => {
  const [task, setTask] = useState({
    nameTask: "",
    descripcion: "",
    fechaInicio: "",
    fechaCierre: "",
    nameCreator: "",
    lastNameCreator: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const handleAddTodo = async (newTodo) => {
    console.log("Form data:", task);
    if (
      task.nameTask &&
      task.descripcion &&
      task.fechaInicio &&
      task.fechaCierre &&
      task.nameCreator &&
      task.lastNameCreator
    ) {
      try {
        const response = await metod(task);
        if (!response.error) {
          setTask({
            nameTask: "",
            descripcion: "",
            fechaInicio: "",
            fechaCierre: "",
            nameCreator: "",
            lastNameCreator: ""
          });
        } else {
          alert("Error trying to add the task");
        }
      } catch (error) {
        console.error("Error trying to add the task:", error);
        alert("Error trying to add the task, please try again later");
      }
    } else {
      alert("Please complete the fields");
    }
  };

  return (
    <div className="todo-form-container">
      <input
        type="text"
        name="nameTask"
        value={task.nameTask}
        onChange={handleInputChange}
        placeholder="Nombre de la tarea"
      />
      <input
        type="text"
        name="descripcion"
        value={task.descripcion}
        onChange={handleInputChange}
        placeholder="Descripción"
      />
      <input
        type="date"
        name="fechaInicio"
        value={task.fechaInicio}
        onChange={handleInputChange}
        placeholder="Fecha de inicio"
      />
      <input
        type="date"
        name="fechaCierre"
        value={task.fechaCierre}
        onChange={handleInputChange}
        placeholder="Fecha de cierre"
      />
      <input
        type="text"
        name="nameCreator"
        value={task.nameCreator}
        onChange={handleInputChange}
        placeholder="Nombre del creador"
      />
      <input
        type="text"
        name="lastNameCreator"
        value={task.lastNameCreator}
        onChange={handleInputChange}
        placeholder="Apellido del creador"
      />
      <button onClick={handleAddTodo}>Agregar</button>
    </div>
  );
};

export default TodoForm;
