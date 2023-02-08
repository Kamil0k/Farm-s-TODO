import React from 'react'

import './NewTODO.css'

const NewTODO = props => {
	const [isDoneTodo, setDoneTodo] = React.useState(false)

	const day = props.date.toLocaleString('en-US', { day: '2-digit' })
	const year = props.date.getFullYear()
	let month
	if (props.date.getMonth() + 1 < 10) {
		month = `0${props.date.getMonth() + 1}`
	}
	let icon
	switch (props.category) {
		case 1:
			icon = <i style={{ color: '#a0ca4b' }} className='fa-solid fa-seedling'></i>
			break

		case 2:
			icon = <i style={{ color: '#aa7e38' }} className='fa-solid fa-cow'></i>
			break
		case 3:
			icon = <i style={{ color: 'black' }} className='fa-solid fa-tractor'></i>
			break
	}

	const doneHandler = () => {
		setDoneTodo(true)
	}

	const removeHandler = () => {
		props.onRemove(props.id)
	}

	return (
		<div className='todo'>
			{isDoneTodo ? (
				<div className='todo__shadow'>
					<div className='todo__shadow-text'>
						TODO was done! <i className='fa-solid fa-check'></i>
					</div>
				</div>
			) : (
				''
			)}

			<div className='todo__first-box'>
				{icon}
				<p className='date'>{day + '.' + month + '.' + year}</p>
			</div>
			<div className='todo__second-box'>
				<h3 className='title'>{props.title}</h3>
				<p className='message'>{props.message}</p>
			</div>
			<div className='todo__third-box'>
				<button style={{ display: isDoneTodo ? 'none' : 'block' }} className='done' onClick={doneHandler}>
					<i className='fa-solid fa-check'></i>
				</button>
				<button className='remove' onClick={removeHandler}>
					<i className='fa-solid fa-xmark'></i>
				</button>
			</div>
		</div>
	)
}

export default NewTODO
