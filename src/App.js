import React, { useState } from 'react';
import TaskForm from './componenets/TaskForm';
import TaskEdit from './componenets/TaskEdit';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const startEditing = (task) => {
    setEditingTask(task);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
    setEditingTask(null);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      
      {editingTask ? (
        <TaskEdit 
          task={editingTask} 
          onUpdate={updateTask} 
          onCancel={() => setEditingTask(null)} 
        />
      ) : (
        <TaskForm onAdd={addTask} />
      )}
      
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span 
              className="task-text" 
              onClick={() => toggleComplete(task.id)}
            >
              {task.text}
            </span>
            <div className="task-actions">
              <button 
                className="edit-btn" 
                onClick={() => startEditing(task)}
              >
                Edit
              </button>
              <button 
                className="delete-btn" 
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;