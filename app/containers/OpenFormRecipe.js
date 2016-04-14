import { connect }               from 'react-redux'
import { openModal, closeModal } from '../actions'
import RecipeWindow              from '../components/RecipeWindow'

const mapStateToProps = (state) => {
  return {
		modalIsOpen: state.modal 
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: () => {
			dispatch(openModal())
		},
		onClose: () => {
			dispatch(closeModal())
		}
	}
}

const OpenFormRecipe = connect(
	mapStateToProps,
	mapDispatchToProps
)(RecipeWindow)

export default OpenFormRecipe