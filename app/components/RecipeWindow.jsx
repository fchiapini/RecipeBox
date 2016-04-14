import React     from 'react'
import AddRecipe from '../containers/AddRecipe'
import Modal     from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const RecipeWindow = ({ modalIsOpen, onClick, onClose }) => (
  <div>
    <button onClick={() => onClick()}>Add Recipe</button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => onClose()}
      style={customStyles} >
      <AddRecipe />
      <button onClick={() => onClose()}>Close</button>
    </Modal>
  </div>
)

export default RecipeWindow