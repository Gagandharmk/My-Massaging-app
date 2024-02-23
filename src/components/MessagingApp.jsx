import React, { useState } from "react";

function MessagingApp() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "me" }]);
      setMessage("");
      // Simulating reply after a short delay
      setTimeout(() => {
        setMessages([
          ...messages,
          { text: "Reply from other side", sender: "other" },
        ]);
      }, 500);
    }
  };

  return (
    <div className="flex">
      <div style={{ float: "left", width: "50%" }}>
        <h2>Me</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <div style={{ float: "right", width: "50%" }}>
        <h2>Other</h2>
        <div>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{ textAlign: msg.sender === "me" ? "right" : "left" }}
            >
              <span
                style={{
                  backgroundColor:
                    msg.sender === "me" ? "lightblue" : "lightgreen",
                  padding: "5px 10px",
                  borderRadius: "10px",
                }}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MessagingApp;
