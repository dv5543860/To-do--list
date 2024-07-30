import React, { useState, useEffect } from 'react'; // Import React and necessary hooks

// TaskForm component for adding and editing tasks
const TaskForm = ({ addTask, editTask, taskToEdit, setTaskToEdit }) => {
  // State to manage task and description input values
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  // Effect to populate form fields when editing an existing task
  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit.task);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]); // Dependency array ensures effect runs when taskToEdit changes

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    // Create a new task object with current state values
    const newTask = {
      task,
      description,
      completed: false,
      timestamp: new Date().toISOString(), // Add timestamp for task creation
    };

    if (taskToEdit) {
      // If editing an existing task, call editTask with updated data
      editTask({ ...taskToEdit, ...newTask });
    } else {
      // Otherwise, call addTask to add a new task
      addTask(newTask);
    }

    // Clear input fields and reset taskToEdit state
    setTask('');
    setDescription('');
    setTaskToEdit(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for task name */}
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      {/* Input field for task description */}
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {/* Submit button with text based on whether editing or adding a new task */}
      <button type="submit">{taskToEdit ? 'Edit Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
