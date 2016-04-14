const modal = (state= false, action) => {
  switch (action.type) {
  	case 'OPEN_MODAL':
      return action.isOpen
    case 'CLOSE_MODAL':
      return action.isOpen   
    default:
      return state  
  }
}

export default modal