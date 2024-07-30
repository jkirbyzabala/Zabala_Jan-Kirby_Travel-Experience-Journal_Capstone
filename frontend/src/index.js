// Import necessary modules
import React from 'react'; // Import React for building components
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App'; // Import the main App component
import './styles/App.css'; // Import global styles
import 'mapbox-gl/dist/mapbox-gl.css'; // Import Mapbox GL CSS

// Create a root element and render the App component into it
const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <App /> // Main application component
  </React.StrictMode>
);
