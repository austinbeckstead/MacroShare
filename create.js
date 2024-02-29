class Recipe{
    constructor(name, image, calories, protein, carbs, fat, ingredients, instructions){
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
function save(){
    let recipes = [];
    const recipesText = localStorage.getItem('recipes');
    const recipe = readRecipe();
    if(recipesText){
       recipes = JSON.parse(recipesText);
    }
    recipes = addRecipe(recipes, recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    window.location.href = "gallery.html";

}
function exit(){
    window.location.href = "gallery.html";
}

function readRecipe(){
    const name = document.querySelector(".recipe-name").value;
    const image = document.querySelector(".recipe-image").value;
    const calories = document.querySelector(".recipe-calories").value;
    const protein = document.querySelector(".recipe-protein").value;
    const carbs = document.querySelector(".recipe-carbs").value;
    const fat = document.querySelector(".recipe-fat").value;
    const ingredients = document.querySelector(".recipe-ingredients").value;
    const instructions = document.querySelector(".recipe-instructions").value;

    return new Recipe(name, image, calories, protein, carbs, fat, ingredients, instructions);
}
function addRecipe(recipes, recipe){
    recipes.push(recipe);
    return recipes;
}