import React from 'react';
import { AuthState } from './authState';
import { Home } from '../home/home';



export function Login(props) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    async function login(){
        loginOrCreate(`/api/auth/login`);
      }
      async function create() {
        loginOrCreate(`/api/auth/create`);
      }

      async function loginOrCreate(endpoint) {

        const response = await fetch(endpoint, {
          method: 'POST',
          body: JSON.stringify({ username: username, password: password }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      
        if (response?.status === 200) {
        console.log("YA");
          localStorage.setItem('username', username);
          props.onAuthChange(username, AuthState.Authenticated);
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
      {props.authState === AuthState.Unauthenticated && (
        <div>
            <label>Username</label>
            <input type="text" id="username" placeholder="username"onChange={(e) => setUsername(e.target.value)}/>
            <br /> <br />
            <label>Password</label>
            <input type="text" id="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <br /> <br />
            <button className="btn btn-dark" onClick={() => login()}>Login</button>
            <button className="btn btn-dark"onClick={() => create()}>Create Account</button>
            </div>
      )}
            {props.authState === AuthState.Authenticated && (
                    <Home username = {username}/>
            )}

      </div>
      </main>

  );
}