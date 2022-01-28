function Ingredient(props){
    return (
        <div className="recipe">
            <p>{props.ingredient.name}</p>
        </div>
    )
}

export default Ingredient;