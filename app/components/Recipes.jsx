import React  from 'react'
import Recipe from './Recipe'

const Recipes = ({ removeRecipe, updateRecipe, recipes }) => (
  <ul>
    {
      recipes.map(recipe =>
	      <Recipe
	        key={recipe.id}
	        {...recipe}
	        removeRecipe={removeRecipe}
	        updateRecipe={updateRecipe}
	      /> 
      )}
  </ul>
)

export default Recipes