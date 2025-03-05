import React, { useState } from "react";

function RecipeGenerator() {
  const [ingredients, setIngredients] = useState("");
  const [cuisine, setCuisine] = useState("any");
  const [dietaryRestrications, setDietaryRestrications] = useState("");
  const [recipe, setRecipe] = useState("");

  const recipeGenerator = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/ai/generate-recipe?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrications=${dietaryRestrications}`
      );
      const finalRecipe = await response.text();
      setRecipe(finalRecipe);
    } catch (error) {
      console.log("Error generating response: ", error);
    }
  };

  return (
    <div>
      <h2>Create Recipe</h2>
      <input
        type="text value={}"
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter raw indegradent..."
      />
      <input
        type="text value={}"
        onChange={(e) => setCuisine(e.target.value)}
        placeholder="Enter what cuisine you want to make if any..."
      />
      <input
        type="text value={}"
        onChange={(e) => setDietaryRestrications(e.target.value)}
        placeholder="Do you have any restrications?"
      />
      <button onClick={recipeGenerator}>Create Recipe</button>
      <div className="output">
        <pre className="recipe-text">{recipe}</pre>
      </div>
    </div>
  );
}
export default RecipeGenerator;
