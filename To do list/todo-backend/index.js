// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000; // Set port from environment variable or default to 5000

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON request bodies

const dataFilePath = './data.json'; // Path to the JSON file where tasks are stored

// Function to read tasks from the file
const readTasks = () => {
  if (!fs.existsSync(dataFilePath)) {
    // Create the file if it doesn't exist
    fs.writeFileSync(dataFilePath, '[]');
  }
  // Read and parse the JSON data from the file
  const data = fs.readFileSync(dataFilePath);
  return JSON.parse(data);
};

// Function to write tasks to the file
const writeTasks = (tasks) => {
  // Stringify the tasks array and write to the file
  fs.writeFileSync(dataFilePath, JSON.stringify(tasks, null, 2));
};

// Route to get all tasks, optionally filtered by search query
app.get('/tasks', (req, res) => {
  const tasks = readTasks(); // Read tasks from the file
  const { search } = req.query; // Get search query parameter

  if (search) {
    // Filter tasks based on the search query
    const filteredTasks = tasks.filter(task =>
      task.task.toLowerCase().includes(search.toLowerCase())
    );
    res.json(filteredTasks); // Send filtered tasks as response
  } else {
    res.json(tasks); // Send all tasks as response
  }
});

// Route to add a new task
app.post('/tasks', (req, res) => {
  const tasks = readTasks(); // Read existing tasks
  const newTask = req.body; // Get new task data from request body
  newTask.id = Date.now(); // Assign a unique ID to the new task
  tasks.push(newTask); // Add the new task to the tasks array
  writeTasks(tasks); // Write updated tasks to the file
  res.json(newTask); // Send the newly added task as response
});

// Route to update an existing task by ID
app.put('/tasks/:id', (req, res) => {
  const tasks = readTasks(); // Read existing tasks
  const updatedTask = req.body; // Get updated task data from request body
  const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id, 10)); // Find the index of the task to be updated

  if (taskIndex !== -1) {
    // Update the task with new data and set a new timestamp
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask, timestamp: new Date().toISOString() };
    writeTasks(tasks); // Write updated tasks to the file
    res.json(tasks[taskIndex]); // Send the updated task as response
  } else {
    res.status(404).json({ message: 'Task not found' }); // Send error if task not found
  }
});

// Route to delete a task by ID
app.delete('/tasks/:id', (req, res) => {
  const tasks = readTasks(); // Read existing tasks
  const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id, 10)); // Find the index of the task to be deleted

  if (taskIndex !== -1) {
    const deletedTask = tasks.splice(taskIndex, 1); // Remove the task from the array
    writeTasks(tasks); // Write updated tasks to the file
    res.json(deletedTask); // Send the deleted task as response
  } else {
    res.status(404).json({ message: 'Task not found' }); // Send error if task not found
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
