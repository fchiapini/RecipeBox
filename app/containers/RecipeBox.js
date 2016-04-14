import { connect }                    from 'react-redux'
import { removeRecipe, updateRecipe } from '../actions'
import Recipes                        from '../components/Recipes'

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
		}
	}
}

const RecipeBox = connect(
	mapStateToProps,
	mapDispatchToProps
)(Recipes)

export default RecipeBox