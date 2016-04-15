import React                  from 'react'
import { connect }            from 'react-redux'
import { addRecipe }          from '../actions'
import { Input, ButtonInput } from 'react-bootstrap'

let AddRecipe = ({ dispatch }) => {
	let inputTitle
  let inputIngredients
  
	return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!inputTitle.value.trim()) {
          return
        }
        dispatch(addRecipe({ title: inputTitle.value, ingredients: inputIngredients.value }))
        inputTitle.value       = ''
        inputIngredients.value = ''
      }}>
        <input
          type="text"
          className="form-control"
          placeholder="Recipe title"
          ref={ node => inputTitle = node}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Type the ingredients separated by comma"
          ref={ node => inputIngredients = node}
        />
        <ButtonInput bsStyle="primary" type="submit" value="Add Recipe"/>
      </form>
    </div>
  )
}

AddRecipe = connect()(AddRecipe)

export default AddRecipe