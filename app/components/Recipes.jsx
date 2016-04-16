import React  from 'react'
import Recipe from './Recipe'

const Recipes = ({ recipes, removeRecipe, updateRecipe, editRecipe, finishEditRecipe, showIngredients }) => (
  <ul className="list-unstyled">
    {
      recipes.map(recipe =>
	      <Recipe
	        key={recipe.id}
	        {...recipe}
	        removeRecipe={removeRecipe}
	        updateRecipe={updateRecipe}
	        editRecipe={editRecipe}
	        finishEditRecipe={finishEditRecipe}
	        showIngredients={showIngredients}
	      /> 
      )}
  </ul>
)

export default Recipes