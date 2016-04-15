import uuid from 'node-uuid';

export const addRecipe = (recipe) => {
	return {
		type: 'CREATE',
		id: uuid.v4(),
		title: recipe.title,
		ingredients: recipe.ingredients,
		editing: false
	}
}

export const removeRecipe = (id) => {
	return {
		type: 'DELETE',
		id
	}
}

export const editRecipe = (id) => {
	return {
		type: 'EDIT',
		id,
		editing: true
	}
}

export const finishEditRecipe = (id) => {
	return {
		type: 'FINISH_EDIT',
		id,
		editing: false
	}
}

export const updateRecipe = (updatedRecipe) => {
	return {
		type: 'UPDATE',
		id: updatedRecipe.id,
		title: updatedRecipe.title,
		ingredients: updatedRecipe.ingredients
	}
}

export const openModal = () => {
	return {
		type: 'OPEN_MODAL',
		isOpen: true
	}
}

export const closeModal = () => {
	return {
		type: 'CLOSE_MODAL',
		isOpen: false
	}
}