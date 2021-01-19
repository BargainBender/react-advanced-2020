import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [text, setText] = useState('') // falsy if empty, truthy if not
	const [isError, setIsError] = useState(false)
	// const firstValue = text || 'hello world' // uses the value if truthy
	// const secondValue = text && 'hello world' // uses the second value if truthy
	return (
		<>
			{/* <h1>{firstValue}</h1>
			<h1>Value: {secondValue}</h1> */}

			<h1>{text || 'john doe'}</h1>
			<button className='btn' onClick={() => setIsError(!isError)}>
				Toggle Error
			</button>
			{isError && <h1>Error...</h1>}
			{isError ? (
				<p>There is an error...</p>
			) : (
				<div>
					<h2>There is no error!</h2>
				</div>
			)}
		</>
	)
}

export default ShortCircuit
