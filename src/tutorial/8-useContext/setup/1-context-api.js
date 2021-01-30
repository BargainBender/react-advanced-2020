import React, { useState, useContext } from 'react'
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext()
// two components - Provider, Consumer

// Root component
const ContextAPI = () => {
	const [people, setPeople] = useState(data)
	const removePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => person.id !== id)
		})
	}
	return (
		<PersonContext.Provider value={{ removePerson, people }}>
			<h3>Context API / useContext</h3>
			<List />
		</PersonContext.Provider>
	)
}

// level 1 component
const List = () => {
	const { people } = useContext(PersonContext)
	return (
		<>
			{people.map((person) => {
				return <SinglePerson key={person.id} {...person} />
			})}
		</>
	)
}

// level 2 component
// since our root component is wrapped around PersonContext API, all child
// components have access to its value, in this case, an object { removePerson }
const SinglePerson = ({ id, name }) => {
	const { removePerson } = useContext(PersonContext)
	return (
		<div className='item'>
			<h4>{name}</h4>
			<button onClick={() => removePerson(id)}>remove</button>
		</div>
	)
}

export default ContextAPI
