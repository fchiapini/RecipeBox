import React       from 'react'
import Ingredients from './Ingredients'
import EditRecipe  from './EditRecipe'

const Recipe = ({ id, title, ingredients, editing, viewIngredients, removeRecipe, updateRecipe, editRecipe, finishEditRecipe, showIngredients }) => (
	<li>
	  <span onClick={() => showIngredients(id)}>{title}</span> <span onClick={() => removeRecipe(id)}>x</span>
	  <button onClick={() => editRecipe(id)}>Edit Recipe</button>
	  {
      viewIngredients ?
      <Ingredients
	      ingredients={ingredients}
	    />
	    : null
	  }
	  { 
	    editing ?
	      <EditRecipe
	        id={id}
	        title={title}
	        ingredients={ingredients}
	        updateRecipe={updateRecipe}
	        finishEditRecipe={finishEditRecipe}
	      />
	    : null
	  }    
	</li>
)

export default Recipe