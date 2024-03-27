const express = require('express');
const app = express();
const DB = require('./database.js');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
//const { peerProxy } = require('./peerProxy.js');
const authCookieName = 'token';
const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));
app.use(cookieParser());

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);



apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.username, req.body.password);
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
});
  }
});

apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

apiRouter.get('/user/:username', async (req, res) => {
  const user = await DB.getUser(req.params.username);
  if (user) {
    const token = req?.cookies.token;
    res.send({ username: user.username, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});


var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// GetRecipes
secureApiRouter.get('/recipes', async (_req, res) => {
  const allRecipes = await DB.getRecipes();
  res.send(allRecipes);
  //res.send(recipes);
});


// AddRecipe
secureApiRouter.post('/recipe', async (req, res) => {
  const newRecipe = await DB.addRecipe(req.body);
  const allRecipes = await DB.getRecipes();
  res.send(allRecipes);
  //recipes = addRecipe(req.body, recipes);
  //res.send(recipes);
});

let userRecipes = new Map();

function setUserRecipes(updatedRecipes, username){
    userRecipes.set(username, updatedRecipes);
}


secureApiRouter.get('/userRecipes/:username', async (req, res) => {
    const newRecipes = await DB.getUserRecipes(req.params.username);
    res.send(newRecipes);
  });

  apiRouter.post('/userRecipe/:username', async (req, res) => {
    const newRecipes = DB.addUserRecipe(req.params.username, req.body);
    res.send(newRecipes);
  });


// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//peerProxy(httpService);


// addRecipe stores a new recipe for as long as the service is running 
/*let recipes = [];
function addRecipe(newRecipe, recipes) {
    recipes.push(newRecipe);
    return recipes;
}
*/
