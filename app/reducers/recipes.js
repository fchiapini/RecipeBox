const recipes = (state= [], action) => {
  switch (action.type) {
    case 'CREATE':
      return [ 
        ...state,
        {
      	  id: action.id,
      	  title: action.title,
          ingredients: action.ingredients
        }
      ]
    case 'DELETE':
      return (state.filter(recipe => recipe.id !== action.id))  
    case 'UPDATE':
      const updatedRecipe = {
        id: action.id,
        title: action.title,
        ingredients: action.ingredients
      }

      return (state.map(recipe => {
        if(recipe.id === action.id) {
          return Object.assign({}, recipe, updatedRecipe);
        }

        return recipe;
      }))
    case 'EDIT':
      return (state.map(recipe => {
        if(recipe.id === action.id) {
          return Object.assign({}, recipe, {
            editing: action.editing
          })
        }

        return recipe
      }))
    case 'FINISH_EDIT':
      return (state.map(recipe => {
        if(recipe.id === action.id) {
          return Object.assign({}, recipe, {
            editing: action.editing
          })
        }

        return recipe
      }))
    case 'SHOW_INGREDIENTS':
      return (state.map(recipe => {
        if(recipe.id === action.id) {
          return Object.assign({}, recipe, {
            viewIngredients: !recipe.viewIngredients
          })
        }

        return recipe
      }))      
    default:
      return state  
  }
}

export default recipes