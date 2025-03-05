import React, { useState } from "react";

function ChatComponent() {
  const [prompt, setPrompt] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  const askAI = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/ai/ask?prompt=${prompt}`
      );
      const data = await response.text();
      setChatResponse(data);
    } catch (error) {
      console.log("Error generating response: ", error);
    }
  };

  return (
    <div>
      <h2>Talk to AI</h2>
      <input
        type="text value={}"
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your question."
      />
      <button onClick={askAI}>askAI</button>
      <div className="output">
        <p>{chatResponse}</p>
      </div>
    </div>
  );
}
export default ChatComponent;
