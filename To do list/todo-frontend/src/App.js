import React, { useState, useEffect } from 'react'; // Import React and hooks for state and effect
import axios from 'axios'; // Import axios for making HTTP requests
import TaskList from './components/TaskList'; // Import TaskList component
import TaskForm from './components/TaskForm'; // Import TaskForm component
import './App.css'; // Import CSS file for styling

const App = () => {
  // State hooks for managing tasks, search query, and task to edit
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null);

  // useEffect hook to fetch tasks from the backend when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5000/tasks');
      setTasks(result.data);
    };
    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  // useEffect hook to set the search query from URL parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const searchQuery = queryParams.get('search') || '';
    setSearch(searchQuery);
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Function to add a new task
  const addTask = async (task) => {
    const result = await axios.post('http://localhost:5000/tasks', task);
    setTasks([...tasks, result.data]); // Add the new task to the existing tasks
  };

  // Function to update an existing task
  const updateTask = async (updatedTask) => {
    const result = await axios.put(`http://localhost:5000/tasks/${updatedTask.id}`, updatedTask);
    setTasks(tasks.map(task => task.id === updatedTask.id ? result.data : task)); // Update the task in the list
  };

  // Function to delete a task
  const deleteTask = async (taskId) => {
    await axios.delete(`http://localhost:5000/tasks/${taskId}`);
    setTasks(tasks.filter(task => task.id !== taskId)); // Remove the deleted task from the list
  };

  // Function to handle search input and update URL parameters
  const searchTasks = (query) => {
    setSearch(query); // Update the search state
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('search', query); // Set the search query in URL parameters
    window.history.replaceState(null, null, '?' + queryParams.toString()); // Update the URL without reloading
  };

  // Function to handle editing a task
  const editTask = async (updatedTask) => {
    const result = await axios.put(`http://localhost:5000/tasks/${updatedTask.id}`, updatedTask);
    setTasks(tasks.map(task => task.id === updatedTask.id ? result.data : task)); // Update the task in the list
  };

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter(task => task.task.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="App">
      <h1>Todo List</h1>
      {/* TaskForm component for adding and editing tasks */}
      <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
      {/* Input field for searching tasks */}
      <input type="text" placeholder="Search tasks" onChange={(e) => searchTasks(e.target.value)} />
      {/* TaskList component for displaying filtered tasks */}
      <TaskList tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} setTaskToEdit={setTaskToEdit} />
    </div>
  );
};

export default App; // Export the App component
