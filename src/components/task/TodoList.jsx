
import React, { useState, useEffect } from "react";
import Modal from "react-modal";

export const TodoList = ({ todos = [], onDeleteTodo }) => {
  console.log(todos)
  const [listModalIsOpen, setListModalIsOpen] = useState(false);
  const [taskModalIsOpen, setTaskModalIsOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const openListModal = () => {
    setListModalIsOpen(true);
  };

  const closeListModal = () => {
    setListModalIsOpen(false);
  };

  const openTaskModal = (todo) => {
    setSelectedTodo(todo);
    setTaskModalIsOpen(true);
  };

  const closeTaskModal = () => {
    setSelectedTodo(null);
    setTaskModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openListModal}>Ver tareas</button>
      <Modal
        isOpen={listModalIsOpen}
        onRequestClose={closeListModal}
        contentLabel="Lista de Tareas"
      >
        <h2>Lista de Tareas</h2>
        <ul>
          {todos && Array.isArray(todos) && todos.map((todo) => (
            <li key={todo._id}>
              <button onClick={() => openTaskModal(todo)}>{todo.nameTask}</button>
            </li>
          ))}
        </ul>
        <button onClick={closeListModal}>Cerrar</button>
      </Modal>
      <Modal
        isOpen={taskModalIsOpen && selectedTodo}
        onRequestClose={closeTaskModal}
        contentLabel="Detalles de la Tarea"
      >
        {selectedTodo && (
          <div>
            <h2>Detalles de la Tarea</h2>
            {todos.map(todo => (
              <div key={todo._id}>
                <p><strong>Nombre:</strong> {todo.nameTask}</p>
                <p><strong>Descripción:</strong> {todo.descripcion}</p>
                <p><strong>Fecha de Inicio:</strong> {todo.fechaInicio}</p>
                <p><strong>Fecha de Cierre:</strong> {todo.fechaCierre}</p>
                <p><strong>Nombre del Creador:</strong> {todo.nameCreator}</p>
                <p><strong>Apellido del Creador:</strong> {todo.lastNameCreator}</p>
                <button onClick={() => onDeleteTodo(todo._id)}>Eliminar</button>
              </div>
            ))}
            <button onClick={closeTaskModal}>Cerrar</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default TodoList;
