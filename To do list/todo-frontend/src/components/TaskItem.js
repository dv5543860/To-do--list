import React, { useState } from 'react'; // Import React and useState hook

// TaskItem component for displaying and managing individual tasks
const TaskItem = ({ task, updateTask, deleteTask, setTaskToEdit }) => {
  // State to manage whether the task details are expanded or collapsed
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the completion status of the task
  const toggleCompleted = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  // Toggle the expanded/collapsed state of the task details
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Set the current task to be edited
  const handleEdit = () => {
    setTaskToEdit(task);
  };

  // Delete the current task
  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div>
      {/* Task title with click event to toggle expansion */}
      <h3 onClick={toggleExpanded}>
        {task.task} {task.completed && '(Done)'}
      </h3>
      {/* Conditionally render task details if expanded */}
      {isExpanded && (
        <div>
          {/* Task description */}
          <p>{task.description}</p>
          {/* Task creation timestamp */}
          <p>{new Date(task.timestamp).toLocaleString()}</p>
          {/* Button to toggle completion status */}
          <button onClick={toggleCompleted}>
            {task.completed ? 'Mark as Incomplete' : 'Mark as Done'}
          </button>
          {/* Button to edit the task */}
          <button onClick={handleEdit}>Edit Task</button>
          {/* Button to delete the task */}
          <button onClick={handleDelete}>Delete Task</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
