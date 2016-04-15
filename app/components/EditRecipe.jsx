import React       from 'react'

const EditRecipe = ({ id, title, ingredients, updateRecipe, editing, finishEditRecipe }) => {
	let inputTitle
  let inputIngredients

  if(editing) {
  	return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!inputTitle.value.trim()) {
            return
          }
          updateRecipe({ id: id, title: inputTitle.value, ingredients: inputIngredients.value })
          inputTitle.value       = ''
          inputIngredients.value = ''
          finishEditRecipe(id)
        }}>
          <input 
          ref={node => {
            inputTitle = node
          }}
          autoFocus={true}
          defaultValue={title}
         />
          <input
          ref={node => {
            inputIngredients = node
          }}
          defaultValue={ingredients}
          />
          <button type="submit">
            Update Recipe
          </button>
        </form>
      </div>
    )
  }
  else {
    return null
  }  
}

export default EditRecipe
