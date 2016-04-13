import uuid from 'node-uuid';

export const addRecipe = (title) => {
	return {
		type: 'CREATE',
		id: uuid.v4(),
		title
	}
}