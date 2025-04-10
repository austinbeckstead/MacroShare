# MacroShare
Social Media Web Application for Recipe Sharing
## How to Run:
+ Open a terminal
+ Enter the 'startup' directory
+ Execute 'npm run dev'
## Elevator Pitch
One of the hardest parts of staying in shape is eating right, and a solid meal plan is necessary for many fitness goals. Especially while tracking macros, many people struggle to find variety and end up eating the same boring foods over and over again. Effective recipes aren't easy to find especially because everyone has different nutritional goals and needs. MacroShare allows you to share and discover recipes based on their nutritional content (calories, protein, fat, carbs). By saving recipes to a personal library, you can create an effective, exciting, and delicious meal plan. 
## Design
![login](/public/images/login.png)
![home](/public/images/home.png)
![gallery](/public/images/gallery.png)
![myGallery](/public/images/myGallery.png)
![viewRecipe](/public/images/viewRecipe.png)
![editRecipe](/public/images/editRecipe.png)
## Key Features
  + Secure Login
  + Create Recipes
  + View community recipes
  + Search recipes based on nutrition facts
  + Save recipes
  + Leave comments on recipes
## Technologies 
  + HTML
    + 6 Pages with hyperlinks, images, structure:
        + Login
        + Home Screen
        + Gallery
        + Personal Gallery
        + Create Recipe
        + View Recipe
  + CSS
      + Tables of items with intuitive layout and spacing, simple design with a clean color scheme
  + JavaScript
      + Login feature, edit textboxes, tables, import images to post recipes. Sorting posts based on search filters. Liking and interacting with posts.
  + Web Services
      + Login
      + Posting Recipes
      + Retreiving data about posts (saves, comments)
      + Getting new posts
  + Authentication
    + Storing user data and securely logging in
  + Storing Data Persistently
    + Storing posts respective data in a database
    + Storing saved posts for each user
  + Web Sockets
      + When a user posts or interacts with a recipe, it appears in a gallery for all users. 
  + React
      + Application will support a React framework

## HTML deliverable
  + HTML Pages: 6 HTML pages: for login, home, recipe gallery, viewing recipes, creating recipes, and a gallery of saved recipes 
  + HTML Tags: I use Head, Body, Nav, Div, Footer, Menu, and Main tags to set up the strucutre of my page. 
  + Links: Each page links Home, Gallery, and myRecipe pages have links to each other. The other pages have links to go back to the gallery. 
  + Text: Each recipe has text for instructions, ingredients, and nutritional content. 
  + Placeholder: The list of recipes is a placeholder to call JavaScript to populate the space with recipes, and links to view each recipe on a separate page. The edit recipes screen also has a placeholder for using a third party service to import an image. 
  + Images: There are images for each recipe on the explore and view recipe screens. 
  + Login: The index.html page is a placeholder for the login page. Username display on the My Recipes screen. 
  + Database data placeholder: Recipes on the explore and my recipes page represent data stored in the database. 
  + WebSocket data placeholder: Comments for recipes on the "View Recipe" screen will update in realtime using WebSocket data. 
  
## CSS deliverable
  + Prerequisite: done- Simon CSS deployed to your production environment
  + Prerequisite: done- A link to your GitHub startup repository prominently displayed on your 			    application's home page. (On the sign in page)
  + 30% Header, footer, and main content body. Uses flex layout for body elements with flex-sizes and gaps. 
  + 20% Navigation elements. In the header there is a horizontal flex menu to reach all the pages. Links are modified to not be blue or underlined. 
  + 10% Responsive to window resizing- Flex and overflow scroll boxes allow you to see all the information in lists for varying window sizes. 
  + 20% Application elements: Bootstrap buttons, grids, and overflow. 
  + 10% Application text content. Using Lora font family, various text colors and weights
  + 10% Application images. Added background image for the footer using CSS.

## JavaScript deliverable
  + Prerequisite: done- Review and deploy Simon JavaScript
  + Have JavaScript that takes user input and adds it to the mocked database data: done - when you create and save a recipe, it is saved in localStorage
  + Have JavaScript that reads the login input and displays the user name: done- username displayed on the My Recipes page
  + Have JavaScript that mocks your database data and injects it into the DOM: done- created and saved recipes from localStorage are entered into the DOM on explore and my recipes pages.
  + Use the localstorage API to keep data between pages and browser sessions: done- localStorage saves username, recipe data, and saved recipe data
  + Have JavaScript that mocks out the realtime data you expect to get from the server using WebSocket and inject it into the DOM: done: comments work like a chat feature on the view recipe page (accessed from explore page). 

## Service deliverable
  + Prerequisite: done- Review and deploy Simon Service
  + Convert your startup application into a web service using Node.js and Express. Done: My application uses HTTP request to save and retreive recipes in the index.js service file. 
  + Serve up your frontend code using the Express static middleware. Done: index.js file uses static express. 
  + Provide endpoints for your service. Done: there are 4 endpoints: GET and POST for all recipes and user recipes. 
  + My frontend code calls those endpoints using fetch and async/await in create.js, gallery.js, recipe.js, and myRecipes.js
  + Call third party endpoints from your frontend code. This can be as simple as displaying a quote like Simon does: The automatically generated comments in recipe.js are now random quotes called from a third party endpoint.

## Login deliverable
  + Prerequisite: done- review andd display Simon Login
  + Fixed Service from previous phase - the userRecipes endpoint is now being called
  + Add code for connecting to the database: Created a database.js to create and connect to a mongo database called startup
  + Provide endpoints for adding, updating, and deleting your application data in the database: Login, createUser, logout, addRecipe, getRecipes, addUserRecipe, getUserRecipes are all endpoints that work with the database
  + Persist data in MongoDB: user and recipe data persisently saves on MongoDB.
  + Display the user data in the frontend by manipulating the DOM. User data shows on the MyRecipes tab. 
  + Allow new users to create accounts by providing credentials: On index.html users can create an account by clicking "Create Account" after entering credentials
  + Store encrypted credentials in your database: username and encrypted password are stored
  + Allow existing users to provide credentials: Click "Login" on index.html after entering credentials
  + Authenticate users by comparing provided credentials against those stored in the database: Authentication works using database data
  + Restrict access to parts of the application that require authorization: (Fixed from first submission): Endpoints use a secureAPI router

## Websocket deliverable
  + Prerequisite: done- review andd display Simon Websocket
  + Listen for WebSocket requests on your backend: done- peerProxy.js handles HTTP upgrades, keeps track of connections, and listens for messages. 
  + Send messages over your WebSocket connection:- when the backend receives a message request, it forwards the data to all connections. 
  + Connect your WebSocket functionality to your application interface:- In Recipe.js, users can chat about a specific recipe by typing and saving a comment. Clients listen for messages, which update the DOM if the selected recipe matches that of the sender.

## React deliverable
  + Prerequisite: done- review andd display Simon React
  + Creating a template starting application using vite and cleaning up what it created: done
  + Creating a react router that displays stubbed components for the main pieces of your application: done
  + Converting your previous HTML files into the stubbed components: done







 

