import React       from 'react'
import Ingredients from './Ingredients'
import EditRecipe  from './EditRecipe'

const Recipe = ({ id, title, ingredients, removeRecipe, updateRecipe }) => (
	<li>
	  {title} <span onClick={() => removeRecipe(id)}>x</span>
	  <button onClick={() => removeRecipe(id)}>Edit Recipe</button>
	  <Ingredients
	    ingredients={ingredients}
	  />
	  <EditRecipe
	    id={id}
	    title={title}
	    ingredients={ingredients}
	    updateRecipe={updateRecipe} 
	    editing={true}
	  />
	</li>
)

export default Recipe