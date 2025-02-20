import { useState, useRef, useEffect } from 'react';
import AiRecipe from './AiRecipe';
import IngredientsList from './IngredientsList';
import { getRecipeFromMistral } from './ai';

const Main = () => {

  const [ingredients, setIngredients] = useState([]);

  const [recipe, setRecipe] = useState("");

  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipe && recipeSection.current) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    console.log(recipeMarkdown);
    setRecipe(recipeMarkdown);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const ingredient = formData.get('ingredient');
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    event.target.reset();
  }
  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      {recipe && <AiRecipe recipe={recipe} ref={recipeSection}/>}
    </main>
  );
}

export default Main;