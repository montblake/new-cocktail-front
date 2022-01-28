import './App.css';
import { useState, useEffect } from 'react';
import IngredientsPage from './components/IngredientsPage';
import RecipesPage from './components/RecipesPage';
import Nav from './components/Nav';


function App() {
	const [recipeState, setRecipeState] = useState({recipes: null})
	const [ingredientState, setIngredientState] = useState({ingredients: null})
	const [page, setPage] = useState({recipes: true})
	const [backendURL, setBackendURL] = useState({base: process.env.REACT_APP_BASE_URL})


	
	// GET DATA
	function getRecipes(){
		fetch(backendURL.base + 'recipes/')
		.then(res => res.json())
		.then(json => setRecipeState({recipes: json}), (err)=>{
			console.log(err)
		});
	}

	function getIngredients(){
		fetch(backendURL.base + 'ingredients/')
		.then(res => res.json())
		.then(json => setIngredientState({ingredients: json}), (err)=>{
			console.log(err)
		});
	}

	// FUNCTIONS TO PASS DOWN
	function handlePageChoice(e){
		if (e.target.name === "recipes"){
			setPage({recipes: true})
		}
		if (e.target.name === "ingredients"){
			setPage({recipes: false})
		}
	}


	useEffect(()=>{
		getRecipes();
	});

	useEffect(()=>{
		getIngredients();
	});
	
	return (
		<div className="container">
			<header>
				<h1>Cocktails!</h1>
				<Nav handlePageChoice={handlePageChoice}/>
			</header>
			
			<main>
				{page.recipes ? 
				<RecipesPage recipes={recipeState.recipes} /> : 
				<IngredientsPage ingredients={ingredientState.ingredients} />}
			</main>
		</div>
	);
}

export default App;
