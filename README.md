# MacroShare
Startup application for BYU CS 260
## Elevator Pitch
One of the hardest parts of staying in shape is eating right, and a solid meal plan is necessary for many fitness goals. Especially while tracking macros, many people struggle to find variety and end up eating the same boring foods over and over again. Effective recipes aren't easy to find especially because everyone has different nutritional goals and needs. MacroShare allows you to share and discover recipes based on their nutritional content (calories, protein, fat, carbs). By saving recipes to a personal library, you can create an effective, exciting, and delicious meal plan. 
## Design
![login](/images/login.png)
![home](/images/home.png)
![gallery](/images/gallery.png)
![myGallery](/images/myGallery.png)
![viewRecipe](/images/viewRecipe.png)
![editRecipe](/images/editRecipe.png)
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

