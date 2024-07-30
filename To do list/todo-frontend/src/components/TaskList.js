import React from 'react'; // Import React
import TaskItem from './TaskItem'; // Import the TaskItem component

// TaskList component for rendering a list of tasks
const TaskList = ({ tasks, updateTask, deleteTask, setTaskToEdit }) => {
  return (
    <div>
      {/* Map over the tasks array and render a TaskItem for each task */}
      {tasks.map(task => (
        // Pass each task's data and handler functions as props to TaskItem
        <TaskItem 
          key={task.id} 
          task={task} 
          updateTask={updateTask} 
          deleteTask={deleteTask} 
          setTaskToEdit={setTaskToEdit} 
        />
      ))}
    </div>
  );
};

export default TaskList;
