import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct import for React 18+
import './index.css';
import App from './App';  // Importing the main App component
import reportWebVitals from './reportWebVitals';  // Importing performance monitoring function

// Create a root and render the App component into it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Render your main App component here */}
  </React.StrictMode>
);

// Optional: track web vitals for performance monitoring (optional)
reportWebVitals();
