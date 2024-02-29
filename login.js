function login() {
    localStorage.clear();
    const name = document.querySelector("#username");
    const password = document.querySelector("#password");
    localStorage.setItem("username", name.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("userRecipes", JSON.stringify([]));
    window.location.href = "home.html";
  }
