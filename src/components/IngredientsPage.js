import Ingredient from './Ingredient';
import IngredientForm from './IngredientForm';

function IngredientsPage(props){
    function ingredientsList(){
		return props.ingredients.map((ingredient) =>
			 <Ingredient ingredient={ingredient} key={ingredient._id} />
		);
	}

	return (
        <section>
            <h2>Ingredients</h2>
            <div>
                {props.ingredients && ingredientsList()}
            </div>
            <IngredientForm createIngredient={props.createIngredient}/>
        </section>
        
    )
}

export default IngredientsPage;