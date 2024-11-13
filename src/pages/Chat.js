// pages/Chat.js
import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'Você', timestamp: new Date().toLocaleTimeString() }]);
      setInputMessage('');
    }
  };

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div style={styles.container}>
      <h1>Chat</h1>
      <p>Converse com seus colegas e professores aqui.</p>
      <div style={styles.chatBox}>
        {messages.map((message, index) => (
          <div key={index} style={styles.message}>
            <span style={styles.sender}>{message.sender}:</span>
            <span style={styles.text}>{message.text}</span>
            <span style={styles.timestamp}>{message.timestamp}</span>
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputMessage}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua mensagem..."
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.sendButton}>Enviar</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
  },
  chatBox: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    maxHeight: '400px',
    overflowY: 'auto',
    backgroundColor: '#f9f9f9',
    marginBottom: '10px',
  },
  message: {
    padding: '5px',
    borderBottom: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sender: {
    fontWeight: 'bold',
    marginRight: '5px',
  },
  text: {
    flex: 1,
  },
  timestamp: {
    fontSize: '0.8em',
    color: '#999',
    marginLeft: '10px',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginRight: '10px',
  },
  sendButton: {
    padding: '10px 20px',
    borderRadius: '4px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Chat;
