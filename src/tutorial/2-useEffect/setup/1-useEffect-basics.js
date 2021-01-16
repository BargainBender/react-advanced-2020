import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter

// NOTE: you cannot call hooks in conditional statements

const UseEffectBasics = () => {
	const [value, setValue] = useState(0)

	useEffect(() => {
		console.log('call useEffect()')
		if (value > 0) {
			document.title = `New messages (${value})`
		}
	}, [value])
	console.log('render component')

	const increaseValue = () => {
		setValue(value + 1)
	}

	return (
		<>
			<h1>{value}</h1>
			<button className='btn' onClick={increaseValue}>
				Click me
			</button>
		</>
	)
}

export default UseEffectBasics
