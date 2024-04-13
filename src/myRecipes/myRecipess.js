async function loadRecipes() {
    const userTitle = document.querySelector(".user-name");
    userTitle.textContent = localStorage.getItem('username');
    const username = localStorage.getItem('username');

    /*
    let recipes = [];
    const recipesText = localStorage.getItem('userRecipes');
    if (recipesText) {
      recipes = JSON.parse(recipesText);
    }
    else{
        return;
    }
    */
    let recipes = [];
    try {
      const response = await fetch(`/api/userRecipes/${username}`);
      recipes = await response.json();
      localStorage.setItem('userRecipes', JSON.stringify(recipes));
    } 
    catch {
      const recipesText = localStorage.getItem('userRecipes');
      if (recipesText) {
        recipes = JSON.parse(recipesText);
      }
      else{
        return;
      }
    }
    

    const galleryBody = document.querySelector('.gallery');
    const galleryList = document.createElement('div');
    galleryList.classList.add("row", "overflow-auto", "gy-4");
    for (const [i, recipe] of recipes.entries()) {
        const galleryElement = document.createElement('div');
        galleryElement.className = "col";
        const title = document.createElement('div');
        const image = document.createElement('img');
        const macros = document.createElement('div');
        const viewButton = document.createElement('button');

        title.classList.add("centered-title");
        image.className = "gallery_image";
        image.src = recipe.image;
        viewButton.classList.add("btn", "btn-secondary");
        viewButton.onclick = function(){loadRecipe(recipe.name)};
        viewButton.textContent = "View Recipe"
        title.textContent = recipe.name;
        macros.textContent = "Calories: " + recipe.calories + " Protein: " + recipe.protein
        + " Carbs: " + recipe.carbs + " Fat: " + recipe.fat;

        galleryElement.appendChild(title);
        galleryElement.appendChild(image);
        galleryElement.appendChild(macros);
        galleryElement.appendChild(viewButton);

        galleryList.appendChild(galleryElement);
    }
    galleryBody.appendChild(galleryList);
}
function loadRecipe(name){
    localStorage.setItem('currRecipe', name);
    window.location.href = "recipe.html";
}

loadRecipes();