import { connect }         from 'react-redux'
import { removeRecipe,
         updateRecipe,
         editRecipe,
         finishEditRecipe,
         showIngredients } from '../actions'
import Recipes             from '../components/Recipes'

const mapStateToProps = (state) => {
	console.log(state)
	return {
		recipes: state.recipes
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		removeRecipe: (id) => {
			dispatch(removeRecipe(id))
		},
		updateRecipe: (updatedRecipe) => {
      dispatch(updateRecipe(updatedRecipe))
		},
		editRecipe: (id) => {
			dispatch(editRecipe(id))
		},
		finishEditRecipe: (id) => {
      dispatch(finishEditRecipe(id))
		},
		showIngredients: (id) => {
			dispatch(showIngredients(id))
		}
	}
}

const RecipeBox = connect(
	mapStateToProps,
	mapDispatchToProps
)(Recipes)

export default RecipeBox