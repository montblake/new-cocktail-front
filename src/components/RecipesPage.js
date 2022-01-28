import Recipe from './Recipe';

function RecipesPage(props){
    function recipeList(){
		return props.recipes.map((recipe) =>
			 <Recipe recipe={recipe} key={recipe._id} />
		);
	}

    return (
        <section>
            <h2>Recipes</h2>
            <div>
                {props.recipes && recipeList()}
            </div>
        </section>
    )
}

export default RecipesPage;