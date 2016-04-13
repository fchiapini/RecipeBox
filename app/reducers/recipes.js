const recipes = (state= [], action) => {
  switch (action.type) {
  	case 'CREATE':
      return [ 
        ...state,
        {
      	  id: action.id,
      	  title: action.title
        }
      ]  
    default:
      return state  
  }
}

export default recipes