import {React, useState} from 'react';
import "./AddRecipe.css";
import data from "./../../api/recipies.json";

function AddRecipe() {

    const [recipeName, setRecipeName] = useState('');
    const [steps, setSteps] = useState(['']);
    const [ingredients, setIngredients] = useState([{name: '', qty: 0, unit: ''}]);

    const handleOnChangeStep = (value, index) => {
        let newSteps = steps;
        newSteps[index] = value;
        setSteps([...newSteps]);
    }

    const handleAddStep = () => {
        let newSteps = steps;
        newSteps.push('');
        setSteps([...newSteps]);
    }

    const handleOnChangeIngredients = (key, value, index) => {
        let newIngredients = ingredients;
        newIngredients[index][key] = value;
        setIngredients([...newIngredients]);
    }

    const handleAddIngredients = () => {
        let newIngredients = ingredients;
        newIngredients.push({name: '', qty: 0, unit: ''});
        setIngredients([...newIngredients]);
    }

    const handleSaveRecipe = () => {
        let newRecipe = {
            "recipe": steps
        }

        ingredients.forEach(x => {
           newRecipe[x.name] = `${x.qty} ${x.unit}`
        });

        let dataToSave = {...data};
        dataToSave[recipeName] = newRecipe;


        console.log(dataToSave);
    }

    return (
        <div className={"recipe-form"} style={{"paddingBottom": "100px"}}>
            <div className={"steps"} style={{"marginBottom": "100px"}}>
                <label>Recipe Name</label>
                <input value={recipeName} onChange={(e) => setRecipeName(e.target.value)}/>
            </div>
            <div className={"steps"}>
                <label>Steps</label>
                {steps.map((step, i) => <input value={step} onChange={(e) => handleOnChangeStep(e.target.value, i)}/>)}
                <button className={"add"} onClick={() => {handleAddStep()}}>add</button>
            </div>
            <div className={"steps"} style={{marginTop: "100px"}}>
                <label>Ingredients</label>
                {ingredients.map((item, i) => {
                    return <div className={"ingredients-item"}>
                        <label>Name</label>
                        <input value={item['name']} onChange={(e) => {handleOnChangeIngredients('name', e.target.value , i)}}/>
                        <label>Quantity</label>
                        <input type={"number"} value={item['qty']} onChange={(e) => {handleOnChangeIngredients('qty', e.target.value , i)}}/>
                        <label>Unit</label>
                        <input value={item['unit']} onChange={(e) => {handleOnChangeIngredients('unit', e.target.value , i)}}/>
                    </div>
                })}
                <button className={"add"} onClick={() => {handleAddIngredients()}}>add</button>
            </div>
            <button className={"add"} onClick={() => {handleSaveRecipe()}}>Save</button>
        </div>
    );
}

export default AddRecipe;
