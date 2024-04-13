import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Gallery } from './gallery/gallery';
import { MyRecipes } from './myRecipes/myRecipes';
import { Create } from './create/create';

export default function App() {
  return( 
    <BrowserRouter>
    <div className='body'>
    <header>
        <h1><div className = "logo"> MacroShare </div> </h1>
            <nav>
                <menu>
                  <li><NavLink to="/gallery" className="link">Explore </NavLink></li>
                  <li><NavLink to="/create" className="link">Create </NavLink></li>
                  <li><NavLink to="/myRecipes" className="link">My Recipes </NavLink></li>
                  <li><NavLink to="" className="link">Sign Out </NavLink></li>
                </menu>
              </nav>
              <hr />
    </header>
    <Routes>
  <Route path='/gallery' element={<Gallery />} />
  <Route path='/create' element={<Create />} />
  <Route path='/myRecipes' element={<MyRecipes />} />
  <Route path='/' element={<Login />} exact/>
  <Route path='*' element={<NotFound />} />
</Routes>

    <footer></footer>
</div>
  </BrowserRouter>

);
}
function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }