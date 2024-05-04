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

  const handleAddTodo = async () => {
    console.log("Datos del formulario:", task);
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
          // Llamar a la función proporcionada desde TaskPage para agregar la nueva tarea
          onAddTodo(response.data);
          // Limpiar el formulario después de agregar la tarea
          setTask({
            nameTask: "",
            descripcion: "",
            fechaInicio: "",
            fechaCierre: "",
            nameCreator: "",
            lastNameCreator: ""
          });
        } else {
          // Manejar el error de manera adecuada
          alert("Error al agregar la tarea. Por favor, inténtalo de nuevo. form");
        }
      } catch (error) {
        // Manejar el error de manera adecuada
        console.error("Error al agregar la tarea:", error);
        alert("Error al agregar la tarea. Por favor, inténtalo de nuevo. form");
      }
    } else {
      // Notificar al usuario que debe completar todos los campos
      alert("Por favor completa todos los campos");
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
