import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return( 
    <div className='body'>

    <header>

            <nav>
                <menu>
                  <li><a href="gallery.html" class="link">Explore </a></li>
                  <li><a href="create.html" class="link">Create</a></li>
                  <li><a href="myRecipes.html"class="link">My Recipes</a></li>
                  <li><a href="index.html"class="link">Sign Out</a></li>
                </menu>
              </nav>
              <hr />
    </header>
    <main> App components go here </main>
    <footer></footer>
</div>

  )
}