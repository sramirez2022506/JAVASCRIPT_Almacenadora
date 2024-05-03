import React from "react";

export const TodoList = ({ todos, onToggleComplete, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id)}
          />
          <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}
          </span>
          <button onClick={() => onDeleteTodo(todo.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};