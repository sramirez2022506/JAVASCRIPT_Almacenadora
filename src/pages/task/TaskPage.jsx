
import React, { useState, useEffect } from "react";
import { TodoForm } from "../../components/task/TodoForm.jsx";
import { TodoList } from "../../components/task/TodoList";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { getTasks, postTask } from "../../services/api.jsx";
import "./TaskPage.css"

export const TaskPage = () => {
  const [todos, setTodos] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await todosData(); 
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
      <TodoForm onAddTodo={(newTodo) => handleAddTodo(newTodo, todos, setTodos)} />
      <TodoList todos={todos} />
    </div>
  );
};

export const handleAddTodo = async (newTodo, setTodos) => {
  try {
    const response = await postTask(newTodo);
    if (response && !response.error) {
      setTodos([...todos, response.data]);
    } else {
      console.error("Error trying to add task:", response.message);
      alert("Error trying to add the task, please try again later");
    }
  } catch (e) {
    console.error("Error trying to add task:", e);
    alert("Error trying to add task, please try again later");
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
      return []; 
    }
  } catch (e) {
    console.error("Error al obtener las tareas:", e);
    return []; 
  }
};

export default TaskPage;
