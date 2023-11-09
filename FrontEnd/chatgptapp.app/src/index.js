// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // This imports the App component from App.js
import './index.css'; // Assuming you have a CSS reset or base styles in index.css

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
