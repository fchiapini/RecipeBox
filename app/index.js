import React           from 'react'
import ReactDOM        from 'react-dom'
import { Provider }    from 'react-redux'
import { createStore } from 'redux'
import recipeApp       from './reducers'
import App             from './components/App'

let store = createStore(recipeApp)

ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>,
	document.getElementById('app')
)