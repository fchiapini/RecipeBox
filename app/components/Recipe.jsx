import React                                from 'react'
import Ingredients                          from './Ingredients'
import EditRecipe                           from './EditRecipe'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'

const liStyle = {
	margin: '15px'
}

const deleteButton = {
  marginLeft: '5px'
}

const Recipe = ({ id, title, ingredients, editing, viewIngredients, removeRecipe, updateRecipe, editRecipe, finishEditRecipe, showIngredients }) => (
	<ListGroup style={liStyle}>
	  <ListGroupItem href="#" onClick={() => showIngredients(id)}><h4>{title}</h4></ListGroupItem>         
	  {
	    viewIngredients ?
	    <div>
	      <Ingredients
		      ingredients={ingredients}
		    />
		    <Button bsStyle="primary" onClick={() => editRecipe(id)}>Edit Recipe</Button>
		    <Button style={deleteButton} bsStyle="danger" onClick={() => removeRecipe(id)}>Delete</Button>
	    </div>
	    : null
	  }
	  { 
	    editing ?
	      <EditRecipe
	        id={id}
	        title={title}
	        ingredients={ingredients}
	        updateRecipe={updateRecipe}
	        finishEditRecipe={finishEditRecipe}
	      />
	    : null
	  }
  </ListGroup>
)

export default Recipe