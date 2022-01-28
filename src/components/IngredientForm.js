import {useState} from 'react';

function IngredientForm(props){
    const [formState, setFormState] = useState({
        name: "",
        category: "",
    });


    function handleChange(e){
        setFormState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    function handleSubmit(e){
        e.preventDefault();
        props.createIngredient(formState);
        setFormState({name: "", category: ""});
    }

    return (
        <div>
            <h2>New Ingredient || Edit Ingredient</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="ing-name">Name:</label>
                <input type="text" name="name" id="ing-name" value={formState.name} onChange={handleChange}/>
                <br />
                <label htmlFor="ing-category">Category:</label>
                <input type="text" name="category" id="ing-category" value={formState.category} onChange={handleChange}/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default IngredientForm;