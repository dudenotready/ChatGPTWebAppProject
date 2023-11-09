// src/App.js
import React from 'react';
import ChatContainer from './ChatContainer';
import logo from './Logo.png'; // Correct relative path if logo.png is in the src directory
import './App.css'; // Make sure you have an App.css file for your styles

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> {/* Logo image */}
        <h1>Chat with ChatGPT</h1>
      </header>
      <main>
        <ChatContainer />
      </main>
    </div>
  );
}

export default App;
