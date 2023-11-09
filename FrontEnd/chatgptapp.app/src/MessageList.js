// src/MessageList.js
import React from 'react';
import Message from './Message';

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <Message key={message.id} text={message.text} />
      ))}
    </div>
  );
}

export default MessageList;
