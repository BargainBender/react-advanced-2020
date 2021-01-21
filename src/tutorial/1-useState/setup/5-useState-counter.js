import React, { useState } from 'react'

const UseStateCounter = () => {
	const [val, setVal] = useState(0)
	const reset = () => {
		setVal(0)
	}

	const complexIncrease = () => {
		setTimeout(() => {
			// setVal(val + 1)
			setVal((prevState) => {
				return prevState + 1
			})
		}, 2000)
	}

	return (
		<>
			<section style={{ margin: '4rem 0' }}>
				<h2>Regular counter</h2>
				<h1>{val}</h1>
				<button className='btn' onClick={() => setVal(val - 1)}>
					decrease
				</button>
				<button className='btn' onClick={reset}>
					reset
				</button>
				<button className='btn' onClick={() => setVal(val + 1)}>
					increase
				</button>
			</section>
			<section style={{ margin: '4rem 0' }}>
				<h2>Complex counter</h2>
				<h1>{val}</h1>
				<button className='btn' onClick={complexIncrease}>
					increase later
				</button>
			</section>
		</>
	)
}

export default UseStateCounter
