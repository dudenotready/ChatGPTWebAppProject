// src/App.js
import React, { useState } from 'react';
import ChatContainer from './ChatContainer';
import logo from './Logo.png'; // Correct relative path if logo.png is in the src directory
import './App.css'; // Make sure you have an App.css file for your styles

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> {/* Logo image */}
        <h1>Chat with ChatGPT</h1>
        <label className="dark-mode-toggle">
  <input 
    type="checkbox" 
    checked={isDarkMode} 
    onChange={toggleDarkMode} 
  />
  Dark Mode
</label>
      </header>
      <main>
        <ChatContainer />
      </main>
    </div>
  );
}


export default App;
