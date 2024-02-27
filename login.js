function login() {
    const name = document.querySelector("#username");
    const password = document.querySelector("#password");
    localStorage.setItem("username", name.value);
    localStorage.setItem("password", password.value);
    window.location.href = "home.html";
  }
