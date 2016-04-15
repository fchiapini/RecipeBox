import React       from 'react'
import Ingredients from './Ingredients'
import EditRecipe  from './EditRecipe'

const Recipe = ({ id, title, ingredients, editing, removeRecipe, updateRecipe, editRecipe, finishEditRecipe }) => (
	<li>
	  {title} <span onClick={() => removeRecipe(id)}>x</span>
	  <button onClick={() => editRecipe(id)}>Edit Recipe</button>
	  <Ingredients
	    ingredients={ingredients}
	  />
	  <EditRecipe
	    id={id}
	    title={title}
	    ingredients={ingredients}
	    updateRecipe={updateRecipe} 
	    editing={editing}
	    finishEditRecipe={finishEditRecipe}
	  />
	</li>
)

export default Recipe