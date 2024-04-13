import React from 'react';

export function Login() {
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