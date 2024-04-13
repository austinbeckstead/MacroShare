import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login(authState, onAuthChange) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function login(){

        loginOrCreate(`/api/auth/login`);
      }
      async function create() {
        loginOrCreate(`/api/auth/create`);
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
          onAuthChange(username, AuthState.Authenticated);
          window.location.href = '../home/home.html';
        } else {
          const body = await response.json();
          const modalEl = document.querySelector('#msgModal');
          modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
          const msgModal = new bootstrap.Modal(modalEl, {});
          msgModal.show();
        }
      }

  return (

    <main>
      <h3 className = "intro"> Welcome to Macroshare </h3>
      <div className="container-fluid text-center">
            <label>Username</label>
            <input type="text" id="username" placeholder="username" />
            <br /> <br />
            <label>Password</label>
            <input type="text" id="password" placeholder="password" />
            <br /> <br />
            <button className="btn btn-dark" onclick="login()">Login</button>
            <button className="btn btn-dark"onclick="create()">Create Account</button>

      </div>
      </main>

  );
}