import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
	const [windowSize, setWindowSize] = useState(window.innerWidth)

	const checkSize = () => {
		setWindowSize(window.innerWidth)
	}

	// Remember, when you add an event listener inside an Effect hook, return a function
	// that has a remove even listener for the same event. The return is invoked once we exit
	// the Effect hook.
	// It is good practice to use a cleanup function when using side effects.
	useEffect(() => {
		console.log('useEffect')
		window.addEventListener('resize', checkSize)
		return () => {
			console.log('cleanup')
			window.removeEventListener('resize', checkSize)
		}
	})
	console.log('render')

	return (
		<>
			<h1>Window</h1>
			<h2>{windowSize} px</h2>
		</>
	)
}

export default UseEffectCleanup
