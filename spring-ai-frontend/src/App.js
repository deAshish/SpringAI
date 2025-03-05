import "./App.css";
import React, { useState } from "react";
import ImageGenerator from "./components/ImageGenerator";
import RecipeGenerator from "./components/RecipeGenerator";
import ChatComponent from "./components/ChatComponent";
function App() {
  const [activeTab, setActiveTab] = useState("image-generator");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <button
        className={activeTab === "image-generator" ? "active" : ""}
        onClick={() => handleTabChange("image-generator")}
      >
        Create Image
      </button>
      <button
        className={activeTab === "chat" ? "active" : ""}
        onClick={() => handleTabChange("chat")}
      >
        Ask to AI
      </button>
      <button
        className={activeTab === "recipe-generator" ? "active" : ""}
        onClick={() => handleTabChange("recipe-generator")}
      >
        Create Recipes
      </button>

      <div>
        {activeTab === "image-generator" && <ImageGenerator />}
        {activeTab === "chat" && <ChatComponent />}
        {activeTab === "recipe-generator" && <RecipeGenerator />}
      </div>
    </div>
  );
}

export default App;
