import React  from 'react'
import Recipe from './Recipe'

const Recipes = ({ removeRecipe, updateRecipe, editRecipe, finishEditRecipe, recipes }) => (
  <ul>
    {
      recipes.map(recipe =>
	      <Recipe
	        key={recipe.id}
	        {...recipe}
	        removeRecipe={removeRecipe}
	        updateRecipe={updateRecipe}
	        editRecipe={editRecipe}
	        finishEditRecipe={finishEditRecipe}
	      /> 
      )}
  </ul>
)

export default Recipes