import React, { useEffect, useRef, useState } from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

// used mostly to target DOM nodes and elements

const UseRefBasics = () => {
	const refContainer = useRef(null)
	const divContainer = useRef(null)
	const [sampleText, setSampleText] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(refContainer.current.value)
		console.log(divContainer.current)
	}

	const handleChange = (e) => {
		setSampleText(e.target.value)
	}

	useEffect(() => {
		console.log(refContainer.current)
		refContainer.current.focus()
	}, [])

	return (
		<>
			<form className='form' onSubmit={handleSubmit}>
				<div>
					<input type='text' ref={refContainer} />
					<button type='submit'>Submit</button>
					<div ref={divContainer}>Hello world!</div>
					<input type='text' value={sampleText} onChange={handleChange} />
				</div>
			</form>
		</>
	)
}

export default UseRefBasics
