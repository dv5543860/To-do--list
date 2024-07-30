
# Todo List Application

## Overview

This project is a full-stack Todo List application with a React frontend and an node.js backend. Users can create, update, delete, and search tasks. The frontend is deployed on Netlify, while the backend is hosted on Render.

### System Design

- **Frontend**: Built with React, this part of the application handles user interactions and communicates with the backend API to perform CRUD operations.
- **Backend**: Developed using Express and Node.js, the backend provides API endpoints for task management and stores data in a JSON file.

### I Deployed this project ...
- **Deployment**:
  - **Frontend**: Hosted on Netlify
  - **Backend**: Hosted on Render

## Implementation

### Frontend

The React frontend provides a user-friendly interface for task management. The key components include:

- **App.js**: The main component responsible for fetching tasks from the backend and handling task operations like adding, updating, deleting, and searching.
- **TaskForm.js**: A form component for adding new tasks and editing existing ones.
- **TaskList.js**: Displays a list of tasks.
- **TaskItem.js**: Represents individual tasks, including functionalities to toggle completion status, expand for details, edit, and delete tasks.

The frontend interacts with the backend through HTTP requests using Axios.

### Backend

The backend is an Express application with the following API endpoints for task management:

- `GET /tasks`: Retrieves all tasks, with optional search filtering.
- `POST /tasks`: Adds a new task.
- `PUT /tasks/:id`: Updates an existing task.
- `DELETE /tasks/:id`: Deletes a task.

It operates on a port defined by the environment variable `PORT`, defaulting to `5000`.

## Setup and Running

### Frontend

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dv5543860/todo-frontend.git
   ```

2. **Navigate to the frontend directory**:
   ```bash
   cd todo-frontend
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm start
   ```

   The frontend will be available at `http://localhost:3000`.

### Backend

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dv5543860/todo-backend.git
   ```

2. **Navigate to the backend directory**:
   ```bash
   cd todo-backend
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the server**:
   ```bash
   node index.js
   ```

   The backend will be available at `http://localhost:5000`.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List Application</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        header {
            background-color: #4CAF50;
            color: white;
            padding: 10px 0;
            text-align: center;
        }
        .container {
            margin: 20px auto;
            padding: 20px;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            max-width: 800px;
        }
        .project-link a {
            color: #4CAF50;
            text-decoration: none;
        }
        .project-link a:hover {
            text-decoration: underline;
        }
        h2 {
            color: #333;
        }
        .feature-list {
            list-style-type: none;
            padding: 0;
        }
        .feature-list li {
            background: #f9f9f9;
            margin: 5px 0;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <header>
        <h1><b>Todo List</b></h1>
    </header>
    <div class="container">
        <div class="project-link">
            <p>Check out the live link of the Todo list app <a href="https://66a8b56dd7b6d12bccfff2ab--to-do-list-dipanshuv.netlify.app/">here</a>.</p>
        </div>
        <h2>Technologies Used</h2>
        <ul class="feature-list">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Dummy JSON</li>
        </ul>
        <h2>Developer</h2>
        <ul class="feature-list">
            <li>Developed by Dipanshu Verma</li>
        </ul>
    </div>
</body>
</html>

