import React         from 'react'
import { connect }   from 'react-redux'
import { addRecipe } from '../actions'

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
        <input ref={node => {
          inputTitle = node
        }} />
        <input ref={node => {
          inputIngredients = node
        }} />
        <button type="submit">
          Add Recipe
        </button>
      </form>
    </div>
  )
}

AddRecipe = connect()(AddRecipe)

export default AddRecipe