import React from 'react'

import './DataCard.css'

const DataCard = props => {
	const date = new Date()
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
	const month = date.getMonth()
	const dayOfMonth = date.getDate()
	const dayOfWeek = date.getDay()-1

	return (
		<div className='card'>
			<div className='card__top'>
				<p className='card__top-month'>{months[month]}</p>
			</div>
			<div className='card__bottom'>
				<p className='card__bottom-day-of-month'>{dayOfMonth}</p>
				<p className='card__bottom-day-of-week'>{days[dayOfWeek]}</p>
			</div>
		</div>
	)
}

export default DataCard
