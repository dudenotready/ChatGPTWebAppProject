// src/components/ChatContainer.js
import React, { useState } from 'react';
import MessageList from './MessageList'; // Make sure to create this component
import InputBar from './InputBar'; // Make sure to create this component

const ChatContainer = () => {
  const [messages, setMessages] = useState([]); // State to store messages

  const handleSendMessage = (newMessage) => {
    // Function to add a new message to the messages state
    const newId = messages.length + 1; // Simple increment for message id, should be unique
    setMessages([...messages, { id: newId, text: newMessage }]);
  };

  return (
    <div className="chat-container">
      <MessageList messages={messages} />
      <InputBar onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
