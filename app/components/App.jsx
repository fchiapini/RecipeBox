import React     from 'react';
import RecipeBox from './RecipeBox.jsx';

export default class App extends React.Component {
	render() {
		return(
			<div>
			  <div>App</div>
			  <RecipeBox/>
			</div>
		);
	}
}