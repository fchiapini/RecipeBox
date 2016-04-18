import React                    from 'react'
import ReactDOM                 from 'react-dom'
import { Provider }             from 'react-redux'
import { compose, createStore } from 'redux'
import persistState             from 'redux-localstorage'
import recipeApp                from './reducers'
import App                      from './components/App'

const createPersistentStore = compose(
	persistState()
)(createStore)

let store = createPersistentStore(recipeApp)

ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>,
	document.getElementById('app')
)