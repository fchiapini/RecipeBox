import { combineReducers } from 'redux'
import recipes             from './recipes'
import modal               from './modal'

const recipeApp = combineReducers({
	modal,
	recipes
})

export default recipeApp