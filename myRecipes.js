class Gallery{

    constructor(){
    const userName = document.querySelector('.user-name');
    userName.textContent = this.getName();
    const recipeText = document.querySelector('.recipe');
    const aa = localStorage.getItem('recipes');
    if(aa){
    const bb = JSON.parse(aa);
    let text = "qa";
    for (i in bb){
        text += i.calories;
    }
    recipeText.textContent = text;
    }
    }   

    getName(){
    return localStorage.getItem('username');
    }
}
const myGallery = new Gallery();

