import React, { useEffect } from 'react';

export function Recipe(props) {
    const [comment, setComment] = React.useState('');
    const [commentsList, setCommentsList] = React.useState([]);
    const [socket, setSocket] = React.useState(null);


    function loadRecipe() {
        let recipes = [];
        const recipesText = localStorage.getItem('recipes');
        if (recipesText) {
            recipes = JSON.parse(recipesText);
        } else {
            return;
        }

        const currName = props.name;
        const currRecipe = recipes.find(recipe => recipe.name === currName);
        if (!currRecipe) {
            return;
        }

                return (

            <div className="recipe">
                <button type="button" onClick={props.back}>Back</button>
                <h2>{currRecipe.name}</h2> 
               <img src={currRecipe.image} alt={currRecipe.name} className="gallery_image" />
                <div>Calories: {currRecipe.calories} Protein: {currRecipe.protein} Carbs: {currRecipe.carbs} Fat: {currRecipe.fat}</div>
                <h4>Ingredients</h4>
                <div>{currRecipe.ingredients}</div>
                <h4>Instructions</h4>
                <div>{currRecipe.instructions}</div>
                <div className="recipe recipe-footer">
                    <h4>Comments</h4>
                    <div className="comments overflow-auto"> 
                    <ul className="comment-list">
                    {commentsList.map((comment, index) => (
                        <li key={index}>{comment.username}: {comment.text}</li>
                        ))}
                        </ul>

                    </div>
                    <input
                    type="text"
                    className="comment-field"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Enter your comment"
                    />
                    <button type="button" onClick={submitComment}>Submit Comment</button>
                    <button type="button" onClick={() => saveRecipe(currRecipe)}>Save Recipe</button>
                </div>
            </div> 
        );
    }

    useEffect(() => {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        const ws = new WebSocket(`${protocol}://${window.location.host}/ws`);
        setSocket(ws);
        ws.onmessage = async (event) => {
            const msg = JSON.parse(await event.data.text()); 
            if (msg.recipe === props.name) {
                setCommentsList(prevComments => [...prevComments, { username: msg.from, text: msg.value }]);
            }
        };
        return () => {
            ws.close();
        };
    }, [props.name]);

    function submitComment(){
        const username = localStorage.getItem('username');
        broadcastComment(username, props.name, comment);
        setComment('');
    };

    function broadcastComment(from, recipe, value) {
        if (socket && socket.readyState === WebSocket.OPEN) {
            const event = {
                from: from,
                recipe: recipe,
                value: value,
            };
            socket.send(JSON.stringify(event));
        } else {
            console.log('WebSocket connection is not open');
        }
    }

    async function saveRecipe(recipe){
        let recipes = [];
        const username = localStorage.getItem('username');
        try {
          const response = await fetch(`/api/userRecipes/${username}`);
          if(response.ok){
          recipes = await response.json();
            }
            else{
                const recipesText = localStorage.getItem('userRecipes');
                recipes = JSON.parse(recipesText);  
            }
          }
        catch {
          const recipesText = localStorage.getItem('userRecipes');
            recipes = JSON.parse(recipesText);
        }
        localStorage.setItem('userRecipes', JSON.stringify(recipes));
    
            for (const [i, r] of recipes.entries()) {
            if(recipe.name === r.name){
                props.back();
                return;
            }
        }
        recipes.push(recipe);
        try {
            const saveResponse = await fetch(`/api/userRecipe/${username}`, {
              method: 'POST',
              headers: {'content-type': 'application/json'},
              body: JSON.stringify(recipes),
            });
            const saveRecipes = await saveResponse.json();
            localStorage.setItem('userRecipes', JSON.stringify(saveRecipes));
          } catch {
            localStorage.setItem('userRecipes', JSON.stringify(recipes));
    }
    
    props.back();    
    }
    return loadRecipe();

}

