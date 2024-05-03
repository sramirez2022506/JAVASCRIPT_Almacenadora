import React, { useState, useEffect } from "react";
import { TodoForm } from "../../components/task/TodoForm";
import { TodoList } from "../../components/task/TodoList";
import { LoadingSpinner } from "../../components/LoadingSpinner.jsx";
import "../../pages/task/TaskPage.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    // Simular una carga inicial de tareas
    setTimeout(() => {
      const initialTodos = [
        { id: 1, text: "Hacer la compra", completed: false },
        { id: 2, text: "Llamar al banco", completed: true },
        { id: 3, text: "Preparar la presentación", completed: false }
      ];
      setTodos(initialTodos);
      setIsFetching(false);
    }, 2000);
  }, []);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    // Lógica para agregar una nueva tarea
  };

  const handleToggleComplete = (id) => {
    // Lógica para marcar una tarea como completada
  };

  const handleDeleteTodo = (id) => {
    // Lógica para eliminar una tarea
  };

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="todo-app-container">
      <h1>Lista de Tareas</h1>
      <TodoForm
        newTodo={newTodo}
        onInputChange={handleInputChange}
        onAddTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        onToggleComplete={handleToggleComplete}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default TodoApp;