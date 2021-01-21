import React from 'react'

const ErrorExample = () => {
	let title = 'Random Title'
	const handleClickBtn = () => {
		title = 'Hello People'
		console.log(title)
	}
	return (
		<>
			<h2>{title}</h2>
			<button type='button' className='btn' onClick={handleClickBtn}>
				Change title
			</button>
		</>
	)
}

export default ErrorExample
