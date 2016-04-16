import React           from 'react'
import { ButtonInput } from 'react-bootstrap'

const EditRecipe = ({ id, title, ingredients, updateRecipe, finishEditRecipe }) => {
	let inputTitle
  let inputIngredients
  
  const marginTop = {
    marginTop: '10px'
  }

	return (
    <div style={marginTop}>
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
        <div className="form-group">
          <input
          type="text"
          className="form-control"
          autoFocus={true}
          defaultValue={title}
          ref={node => {
            inputTitle = node
          }}
         />
       </div>
        <textarea
        type="text"
        className="form-control"
        defaultValue={ingredients}
        ref={node => {
          inputIngredients = node
        }}
        />
        <ButtonInput style={marginTop} bsStyle="primary" type="submit" value="Update Recipe"/>
      </form>
    </div>
  ) 
}

export default EditRecipe
