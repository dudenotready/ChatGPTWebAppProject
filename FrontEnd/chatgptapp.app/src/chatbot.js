import React, { useState } from 'react';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    // Call your GPT API here. For now, I'll just simulate a delay and then add a dummy response.
    await new Promise(resolve => setTimeout(resolve, 1000));
    setMessages(prev => [...prev, { text: 'Hello, I am a GPT bot.', sender: 'bot' }]);
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message.sender}:</strong> {message.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatBot;