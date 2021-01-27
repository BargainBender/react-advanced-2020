import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { reducer } from './reducer'
import { v4 as uuidv4 } from 'uuid'
// reducer function

const defaultState = {
	people: [],
	isModalOpen: false,
	modalContent: 'Hello world!',
}

const Index = () => {
	const [name, setName] = useState('')
	const [state, dispatch] = useReducer(reducer, defaultState)

	const handleSubmit = (e) => {
		e.preventDefault()
		if (name) {
			const newItem = { id: uuidv4(), name }
			dispatch({ type: 'ADD_ITEM', payload: newItem })
			setName('')
		} else {
			dispatch({ type: 'NO_VALUE' })
		}
	}

	const closeModal = () => {
		dispatch({ type: 'CLOSE_MODAL' })
	}

	return (
		<>
			{state.isModalOpen && (
				<Modal modalContent={state.modalContent} closeModal={closeModal} />
			)}
			<form onSubmit={handleSubmit} className='form'>
				<div>
					<input
						type='text'
						onChange={(e) => {
							setName(e.target.value)
						}}
					/>
				</div>
				<button type='submit'>Add person</button>
			</form>
			{state.people.map((person) => {
				return (
					<div key={person.id} className='item'>
						<h4>{person.name}</h4>
						<button
							onClick={() =>
								dispatch({ type: 'REMOVE_ITEM', payload: person.id })
							}>
							remove
						</button>
					</div>
				)
			})}
		</>
	)
}

export default Index
