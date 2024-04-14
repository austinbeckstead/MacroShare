import React, { useState, useEffect } from 'react';
import { Recipe } from '../recipe/recipe';


export function Gallery() {
    const [recipes, setRecipes] = useState([]);
    const [currRecipe, setCurrRecipe] = useState('');

    useEffect(() => {
        async function fetchRecipes() {
            try {
                const response = await fetch('/api/recipes');
                const data = await response.json();
                setRecipes(data);
                localStorage.setItem('recipes', JSON.stringify(data));
            } catch (error) {
                console.error('Error fetching recipes:', error);
                const recipesText = localStorage.getItem('recipes');
                if (recipesText) {
                    setRecipes(JSON.parse(recipesText));
                }
            }
        }

        fetchRecipes();
    }, []);

    function loadRecipe(name) {
        localStorage.setItem('currRecipe', name);
        setCurrRecipe(name);
    }

    return (

        <main>
            {currRecipe === '' && (
            <div className="gallery">
                <div className="row overflow-auto gy-4">
                    {recipes.map((recipe, index) => (
                        <div className="col" key={index}>
                            <div className="centered-title">{recipe.name}</div>
                            <img className="gallery_image" src={recipe.image} alt={recipe.name} />
                            <div>Calories: {recipe.calories} Protein: {recipe.protein} Carbs: {recipe.carbs} Fat: {recipe.fat}</div>
                            <button className="btn btn-secondary" onClick={() => loadRecipe(recipe.name)}>View Recipe</button>
                        </div>
                    ))}
                </div>
            </div>
            )}
            {currRecipe !== '' && (
                <Recipe name = {currRecipe}  back = {() => setCurrRecipe('')} />
            )}
        </main>
    );
}
