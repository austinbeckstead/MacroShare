const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('users');
const recipeCollection = db.collection('recipes');
const userRecipeCollection = db.collection('userRecipes');


// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

function addRecipe(recipe) {
  recipeCollection.insertOne(recipe);
}

function getRecipes() {
  const cursor = recipeCollection.find();
  return cursor.toArray();
}

async function addUserRecipe(username, newRecipes) {
        const result = await db.collection('userRecipes').updateOne(
            { username: username },
            { $set: { recipes: newRecipes } },
            { upsert: true }
          );
      return newRecipes;
  }

  async function getUserRecipes(username) {
    const cursor = db.collection('userRecipes').find({ username: username });
    const userRecipes = await cursor.toArray();
    
    // Extract the 'recipes' field from the first document (if exists)
    const recipesArray = userRecipes.length > 0 ? userRecipes[0].recipes : [];

    return recipesArray;
}
module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addRecipe,
  getRecipes,
  addUserRecipe,
  getUserRecipes,
};
