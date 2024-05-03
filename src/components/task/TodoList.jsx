import React, { useState } from "react";
import Modal from "react-modal";

export const TodoList = ({ todos, onToggleComplete, onDeleteTodo }) => {
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
          {todos.map((todo) => (
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
            <p><strong>Nombre:</strong> {selectedTodo.nameTask}</p>
            <p><strong>Descripción:</strong> {selectedTodo.descripcion}</p>
            <p><strong>Fecha de Inicio:</strong> {selectedTodo.fechaInicio}</p>
            <p><strong>Fecha de Cierre:</strong> {selectedTodo.fechaCierre}</p>
            <p><strong>Nombre del Creador:</strong> {selectedTodo.nameCreator}</p>
            <p><strong>Apellido del Creador:</strong> {selectedTodo.lastNameCreator}</p>
            <button onClick={() => onDeleteTodo(selectedTodo._id)}>Eliminar</button>
            {/* Agrega el botón de actualizar aquí */}
            <button onClick={closeTaskModal}>Cerrar</button>
          </div>
        )}
      </Modal>
    </div>
  );
};
