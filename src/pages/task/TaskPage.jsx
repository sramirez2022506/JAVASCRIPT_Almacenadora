import React, { useState, useEffect } from "react";
import { TodoForm } from "../../components/task/TodoForm";
import { TodoList } from "../../components/task/TodoList";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import "./TaskPage.css";

export const TaskPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    // Simular una carga inicial de tareas
    setTimeout(() => {
      const initialTodos = [
        { 
          id: 1, 
          nameTask: "Hacer la compra", 
          descripcion: "Comprar alimentos para la semana", 
          fechaInicio: "2024-05-03", 
          fechaCierre: "2024-05-04", 
          nameCreator: "Juan", 
          lastNameCreator: "Pérez", 
          incompleta: false, 
          estado: false 
        },
        { 
          id: 2, 
          nameTask: "Llamar al banco", 
          descripcion: "Consultar el estado de la cuenta", 
          fechaInicio: "2024-05-03", 
          fechaCierre: "2024-05-03", 
          nameCreator: "María", 
          lastNameCreator: "González", 
          incompleta: true, 
          estado: true 
        },
        { 
          id: 3, 
          nameTask: "Preparar la presentación", 
          descripcion: "Preparar la presentación para la reunión de mañana", 
          fechaInicio: "2024-05-02", 
          fechaCierre: "2024-05-05", 
          nameCreator: "Carlos", 
          lastNameCreator: "Martínez", 
          incompleta: false, 
          estado: true 
        }
      ];
      setTodos(initialTodos);
      setIsFetching(false);
    }, 2000);
  }, []);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    
    console.log("Valor de newTodo:", newTodo);
    if (newTodo.trim() !== "") {
      const newTask = {
        id: todos.length + 1,
        nameTask: newTodo,
        descripcion: "",
        fechaInicio: "",
        fechaCierre: "",
        nameCreator: "",
        lastNameCreator: "",
        incompleta: true,
        estado: true
      };
      setTodos([...todos, newTask]);
      setNewTodo("");
    } else {
      alert("Por favor ingresa el nombre de la tarea.");
    }
  };
  
  
  

  const handleToggleComplete = (id) => {
    // Lógica para marcar una tarea como completada
  };

  const handleDeleteTodo = (id) => {
    // Lógica para eliminar una tarea
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="task-page-container">
      <h1>Lista de tareas</h1>
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

export default TaskPage;
