function login() {
    const nameEl = document.querySelector("#username");
    const passwordEl = document.querySelector("#password");
    localStorage.setItem("userName", nameEl.value);
    localStorage.setItem("password", nameEl.value);
    window.location.href = "play.html";
  }