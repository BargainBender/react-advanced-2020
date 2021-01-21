import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
	const [firstName, setFirstName] = useState('')
	const [email, setEmail] = useState('')
	const [people, setPeople] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault()
		if (firstName && email) {
			const person = {
				// if key matches the variable name, you can shortcut it like this.
				// it is equal to { firstName: firstName, email: email, }
				id: uuidv4(),
				firstName,
				email,
			}
			setPeople((people) => [...people, person])
			setFirstName('')
			setEmail('')
			console.log(person)
			console.log('Submitted the form')
		} else {
			console.log('Empty values')
		}
	}

	return (
		<>
			<article>
				<form className='form' onSubmit={handleSubmit}>
					<div className='form-control'>
						<label htmlFor='firstName'>Name: </label>
						<input
							type='text'
							name='firstName'
							id='firstName'
							value={firstName}
							// accessing the event object's value
							// giving us what is typed in the input
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='email'>Email: </label>
						<input
							type='text'
							name='email'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<button type='submit'>Add person</button>
				</form>
				{people.map((person) => {
					const { id, firstName, email } = person
					return (
						<div key={id} className='item'>
							<h4>{firstName}</h4>
							<p>{email}</p>
						</div>
					)
				})}
			</article>
		</>
	)
}

export default ControlledInputs
