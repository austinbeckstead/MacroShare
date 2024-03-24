/*function login() {
    localStorage.clear();
    const name = document.querySelector("#username");
    const password = document.querySelector("#password");
    localStorage.setItem("username", name.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("userRecipes", JSON.stringify([]));
    window.location.href = "home.html";
  }
*/

function login(){
  console.log("HE");
  loginOrCreate(`/auth/login`);
}
async function create() {
  loginOrCreate(`/auth/create`);
}
async function loginOrCreate(endpoint) {
  const username = document.querySelector('#username')?.value;
  const password = document.querySelector('#password')?.value;
  const response = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify({ username: username, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) {
    localStorage.setItem('username', username);
    window.location.href = 'home.html';
  } else {
    const body = await response.json();
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}