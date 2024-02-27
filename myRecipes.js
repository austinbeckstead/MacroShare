class Gallery{
    getName(){
        return localStorage.getItem('username');
    }
constructor(){
const userName = document.querySelector('.user-name');
userName.textContent = this.getName();
}
}
const myGallery = new Gallery();

