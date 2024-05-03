import React, { useState } from "react";

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

  const handleAddTodo = () => {
    if (
      task.nameTask &&
      task.descripcion &&
      task.fechaInicio &&
      task.fechaCierre &&
      task.nameCreator &&
      task.lastNameCreator
    ) {
      onAddTodo(task);
      setTask({
        nameTask: "",
        descripcion: "",
        fechaInicio: "",
        fechaCierre: "",
        nameCreator: "",
        lastNameCreator: ""
      });
    } else {
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
