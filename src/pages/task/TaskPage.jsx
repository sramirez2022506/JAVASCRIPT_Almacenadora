// TaskPage.jsx
import React, { useState, useEffect } from "react";
import { TodoForm } from "../../components/task/TodoForm.jsx";
import { TodoList } from "../../components/task/TodoList";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { getTasks, postTask } from "../../services/api.jsx";

export const TaskPage = () => {
  const [todos, setTodos] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await todosData(); // Llama a la función para obtener los datos
        setTodos(data);
        setIsFetching(false);
      } catch (error) {
        console.error("Error al obtener las tareas:", error);
        setIsFetching(false);
      }
    };

    fetchData(); 
  }, []);

  

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="task-page-container">
      <h1>Lista de tareas</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export const handleAddTodo = async (newTodo) => {
  try {
    const response = await postTask(newTodo);
    if (!response.error) {
      setTodos([...todos, response.data]);
    } else {
      console.error("Error al agregar la tarea: page..", response.message);
      alert("Error al agregar la tarea. Por favor, inténtalo de nuevo. page");
    }
  } catch (e) {
    console.error("Error al agregar la tarea:", e);
    alert("Error al agregar la tarea. Por favor, inténtalo de nuevo. page");
  }
};

const todosData = async () => {
  try {
    const response = await getTasks();
    console.log(response.data)
    if (!response.error) {
      return response.data;
    } else {
      console.error("Error al obtener las tareas:", response.error);
      return []; // Devolver un array vacío en caso de error
    }
  } catch (e) {
    console.error("Error al obtener las tareas:", e);
    return []; // Devolver un array vacío en caso de error
  }
};

export default TaskPage;
