import { combineReducers } from 'redux'
import recipes             from './recipes'

const recipeApp = combineReducers({
	recipes
})

export default recipeApp