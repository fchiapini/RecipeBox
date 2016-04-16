import React      from 'react'
import AddRecipe  from '../containers/AddRecipe'
import Modal      from 'react-modal'
import { Button } from 'react-bootstrap'

const customStyles = {
  content : {
    width       : '30%',
    top         : '40%',
    left        : '50%',
    right       : 'auto',
    bottom      : 'auto',
    marginRight : '-50%',
    transform   : 'translate(-50%, -50%)'
  }
}

const RecipeWindow = ({ modalIsOpen, onClick, onClose }) => (
  <div>
    <Button bsStyle="primary" onClick={() => onClick()}>+Add Recipe</Button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => onClose()}
      style={customStyles} >
      <AddRecipe />
      <Button bsStyle="danger" onClick={() => onClose()}>Close</Button>
    </Modal>
  </div>
)

export default RecipeWindow