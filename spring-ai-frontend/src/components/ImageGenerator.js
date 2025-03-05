import React, { useState } from "react";

function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [imageCount, setImageCount] = useState(1);
  const [imageUrls, setImageUrls] = useState([]);

  const generateImage = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/ai/generate-image?prompt=${prompt}&n=${imageCount}`
      );
      const urls = await response.json();
      console.log(urls);
      setImageUrls(urls);
    } catch (error) {
      console.log("Error generating image: ", error);
    }
  };

  return (
    <div className="tab-content">
      <h2>Create Image</h2>
      <input
        type="text"
        min="1"
        max="4"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter Prompt for image."
      />
      <input
        type="number"
        value={imageCount}
        onChange={(e) => setImageCount(e.target.value)}
        placeholder="Enter number of images you want(1-4)."
      />

      <button onClick={generateImage}>Generate Image</button>

      <div className="image-grid">
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Generated ${index}`} />
        ))}
        {[...Array(4 - imageUrls.length)].map((_, index) => (
          <div
            key={index + imageUrls.length}
            className="empty-image-slot"
          ></div>
        ))}
      </div>
    </div>
  );
}
export default ImageGenerator;
