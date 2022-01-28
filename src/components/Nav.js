function Nav(props){
    return (
        <nav>
            <button onClick={props.handlePageChoice} name="recipes">Recipes</button>
            <button onClick={props.handlePageChoice} name="ingredients">Ingredients</button>
        </nav>
    )
}

export default Nav;