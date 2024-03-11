const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetRecipes
apiRouter.get('/recipes', (_req, res) => {
  res.send(recipes);
});


// AddRecipe
apiRouter.post('/recipe', (req, res) => {
  recipes = addRecipe(req.body, recipes);
  res.send(recipes);
});


apiRouter.get('/userRecipes/:username', (req, res) => {
    res.send(userRecipes.get(req.params.username));
  });

  apiRouter.post('/userRecipe/:username', (req, res) => {
    userRecipes = setUserRecipes(req.body, _req.params.username, userRecipes);
    res.send(userRecipes);
  });

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// addRecipe stores a new recipe for as long as the service is running 
let recipes = [];
function addRecipe(newRecipe, recipes) {
    recipes.push(newRecipe);
    return recipes;
}

let userRecipes = new Map();
function setUserRecipes(updatedRecipes, username, userRecipes){
    userRecipes.set(username, updatedRecipes);
    return userRecipes;
}
