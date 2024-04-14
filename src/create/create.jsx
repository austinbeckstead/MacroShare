import React, { useState } from 'react';

class Recipe {
    constructor(name, image, calories, protein, carbs, fat, ingredients, instructions) {
        this.name = name;
        this.image = image;
        this.calories = calories;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.owner = localStorage.getItem('username');
        this.comments = [];
    }
}

export function Create() {
    const [recipe, setRecipe] = useState(new Recipe('', '', '', '', '', '', '', ''));
    const [saved, setSaved] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe(prevRecipe => ({
            ...prevRecipe,
            [name]: value
        }));
    };

    const save = async () => {
        try {
            const response = await fetch('/api/recipe', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(recipe),
            });
            const recipes = await response.json();
            localStorage.setItem('recipes', JSON.stringify(recipes));
            setSaved(true);
        } catch {
            saveLocal(recipe);
            setSaved(true);
        }
    };

    const saveLocal = (recipe) => {
        let recipes = [];
        const recipesText = localStorage.getItem('recipes');
        if (recipesText) {
            recipes = JSON.parse(recipesText);
        }
        recipes = addRecipe(recipes, recipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
    };

    const addRecipe = (recipes, recipe) => {
        recipes.push(recipe);
        return recipes;
    };

    const exit = () => {
        window.location.href = "gallery.html";
    };

    return (
        <main>
                  {!saved && (

            <form>
                <label htmlFor="name">Recipe Name 
                    <input 
                        type="text" 
                        className="recipe-name" 
                        name="name" 
                        value={recipe.name} 
                        onChange={handleChange} 
                    />
                </label>
                <br />
                <br />
                Upload Image:
                <br />
                <label>URL<input 
                    type="text" 
                    className="recipe-image" 
                    name="image" 
                    value={recipe.image} 
                    onChange={handleChange} 
                /></label> 
                <br />
                <br />
                <div id="macroInput">
                    <label>Calories<input 
                        type="text" 
                        className="recipe-calories" 
                        name="calories" 
                        value={recipe.calories} 
                        onChange={handleChange} 
                    /></label> 
                    <label>Protein <input 
                        type="text" 
                        className="recipe-protein" 
                        name="protein" 
                        value={recipe.protein} 
                        onChange={handleChange} 
                    /></label>
                    <label>Carbs <input 
                        type="text" 
                        className="recipe-carbs" 
                        name="carbs" 
                        value={recipe.carbs} 
                        onChange={handleChange} 
                    /></label>
                    <label>Fat<input 
                        type="text" 
                        className="recipe-fat" 
                        name="fat" 
                        value={recipe.fat} 
                        onChange={handleChange} 
                    /></label>
                </div>
                <br />
                <label>Ingredients
                    <textarea 
                        className="recipe-ingredients" 
                        name="ingredients" 
                        value={recipe.ingredients} 
                        onChange={handleChange} 
                    ></textarea>
                </label>
                <label>Instructions
                    <textarea 
                        className="recipe-instructions" 
                        name="instructions" 
                        value={recipe.instructions} 
                        onChange={handleChange} 
                    ></textarea>
                </label>
                <br /><br />
                <button type="button" onClick={save}>Save</button>
                <button type="button" onClick={exit}>Cancel</button>
            </form>
                  )}
            {saved && (

                <h2> Recipe Saved </h2>

            )}


        </main>
    );
}
