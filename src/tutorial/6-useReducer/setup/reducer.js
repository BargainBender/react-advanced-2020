export const reducer = (state, action) => {
	let newPeople
	switch (action.type) {
		case 'ADD_ITEM':
			newPeople = [...state.people, action.payload]
			return {
				...state,
				people: newPeople,
				isModalOpen: true,
				modalContent: 'Person added',
			}
		case 'REMOVE_ITEM':
			const person = state.people.filter(
				(person) => person.id === action.payload
			)[0]
			newPeople = state.people.filter((person) => person.id !== action.payload)
			return {
				...state,
				people: newPeople,
				isModalOpen: true,
				modalContent: `${person.name} removed. (${person.id})`,
			}
		case 'NO_VALUE':
			return {
				...state,
				isModalOpen: true,
				modalContent: 'Please enter a value',
			}
		case 'CLOSE_MODAL':
			return {
				...state,
				isModalOpen: false,
			}
		default:
			throw new Error('No matching action type.')
	}
}
