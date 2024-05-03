import React from "react";

export const TodoForm = ({ newTodo, onInputChange, onAddTodo }) => {
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={onInputChange}
        placeholder="Añadir nueva tarea"
      />
      <button onClick={onAddTodo}>Agregar</button>
    </div>
  );
};