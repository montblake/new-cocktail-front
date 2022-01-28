import {useState} from 'react';


function Recipe(props){
    const [state, setState] = useState({show: false})

    
    
    // CRUD FUNCTIONS
    function editIngredient(){
        return
    }

    function deleteIngredient(){
        return
    }

    // RENDER CONTROL
    function handleClick(){
        console.log('clicked!')
        setState((prevState) => ({show: !prevState.show}))
    }

    // RENDER FUNCTIONS
    function renderIngredients(){
        return props.recipe.ingredients.map((ingredient)=> {
            return <li key={ingredient._id}>
                <span>{ingredient.amount} </span>
                <span>{ingredient.fraction} </span>
                <span>{ingredient.measurement} </span>
                <span>{ingredient.ingredient.name}</span>
            </li>
        })
    }

    function renderIndex(){
        return (
            <div className="recipe" onClick={handleClick}>
                <h3>{props.recipe.name}</h3>
            </div>
        )
    }

    function renderShow(){
        return (
            <div className="recipe" onClick={handleClick}>
                <h3>{props.recipe.name}</h3>
                <ul>
                    {renderIngredients()}
                </ul>
                <div className="controls">
                    <button onClick={editIngredient}>Edit</button>
                    <button onClick={deleteIngredient}>Delete</button>
                </div>

            </div>
        )
    }

    


    return (
        <>
            {state.show ? renderShow() : renderIndex()}
        </>
    )
}

export default Recipe;