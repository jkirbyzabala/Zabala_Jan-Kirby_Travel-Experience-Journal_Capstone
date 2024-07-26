// Import necessary modules
import React from 'react'; // Import React for building components
import ReactDOM from 'react-dom'; // Import ReactDOM for rendering React components
import App from './App'; // Import the main App component
import './styles/App.css'; // Import global styles

// Render the App component into the root element of the HTML
ReactDOM.render(
  <React.StrictMode>
    <App /> // Main application component
  </React.StrictMode>,
  document.getElementById('root') // The root element in index.html
);
