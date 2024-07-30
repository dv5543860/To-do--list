import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering React components
import './index.css'; // Import CSS file for global styling
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Import function to measure performance

// Create a root element to render the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode> 
    {/* StrictMode helps identify potential problems in the application during development */}
    <App />
  </React.StrictMode>
);

// Measure performance of the app (e.g., load times, etc.) and log results
reportWebVitals();
