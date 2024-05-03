import { useState } from "react";
import './ListaTareas.css';

export const FormPage = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [incomplete, setIncomplete] = useState(false);
  const [creatorName, setCreatorName] = useState('');
  const [creatorLastName, setCreatorLastName] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      const newTask = {
        id: Date.now(),
        taskName: taskName,
        description: description,
        startDate: startDate,
        endDate: endDate,
        incomplete: incomplete,
        creatorName: creatorName,
        creatorLastName: creatorLastName
      };
      if (editingTask !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editingIndex] = newTask;
        setTasks(updatedTasks);
        setEditingTask(null);
        setEditingIndex(null);
      } else {
        setTasks([...tasks, newTask]);
      }
      setTaskName('');
      setDescription('');
      setStartDate('');
      setEndDate('');
      setIncomplete(false);
      setCreatorName('');
      setCreatorLastName('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find(task => task.id === taskId);
    if (taskToEdit) {
      setEditingTask(taskToEdit);
      setEditingIndex(tasks.findIndex(task => task.id === taskId));
      setTaskName(taskToEdit.taskName);
      setDescription(taskToEdit.description);
      setStartDate(taskToEdit.startDate);
      setEndDate(taskToEdit.endDate);
      setIncomplete(taskToEdit.incomplete);
      setCreatorName(taskToEdit.creatorName);
      setCreatorLastName(taskToEdit.creatorLastName);
    }
  };
 
  return (
    <div className="app-container">
      <h1><img src="icon"></img>To Do List</h1>
      <form className="container-form-1" onSubmit={handleAddTask}>
      <li>
        <div>
          <label>Task Name</label>
          <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        </div>
        <div>
          <label>Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Start Date</label>
          <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div>
          <label>End Date</label>
          <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <div>
          <label>Creator's Name</label>
          <input type="text" value={creatorName} onChange={(e) => setCreatorName(e.target.value)} />
        </div>
        <div>
          <label>Creator's Last Name</label>
          <input type="text" value={creatorLastName} onChange={(e) => setCreatorLastName(e.target.value)} />
        </div>
        <div>
          <label>Incomplete</label>
          <input type="checkbox" checked={incomplete} onChange={(e) => setIncomplete(e.target.checked)} />
        </div>
        <button className="add-button" type='submit'>{editingTask ? 'Update Task' : 'Add Task'}</button>
        </li>
      </form>
      <ul className="container-form-2">
        {tasks.map(task => (
          <li key={task.id}>
            <div>
              <strong>Task Name:</strong> {task.taskName}
            </div>
            <div>
              <strong>Description:</strong> {task.description}
            </div>
            <div>
              <strong>Start Date:</strong> {task.startDate}
            </div>
            <div>
              <strong>End Date:</strong> {task.endDate}
            </div>
            <div>
              <strong>Incomplete:</strong> {task.incomplete ? 'Yes' : 'No'}
            </div>
            <div>
              <strong>Creator's Name:</strong> {task.creatorName}
            </div>
            <div>
              <strong>Creator's Last Name:</strong> {task.creatorLastName}
            </div>
            <button className="edit-button" onClick={() => handleEditTask(task.id)}>Edit Task</button>
            <button className="delete-button" onClick={() => handleDeleteTask(task.id)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormPage;