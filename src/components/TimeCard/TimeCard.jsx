import React, { useState } from 'react'

import './TimeCard.css'

const TimeCard = props => {
	let timeInterval
	let hour, minutes, seconds
	const [time, setTime] = useState(new Date())

	const startTime = () => {
		timeInterval = setInterval(() => {
			setTime(new Date())
		}, 1000)
	}

	const generateTime = () => {
		hour = time.getHours()
		minutes = time.getMinutes()
		seconds = time.getSeconds()
        if(hour<10){
            hour = `0${time.getHours()}`
        }
        if(minutes<10){
            minutes = `0${time.getMinutes()}`
        }
        if(seconds<10){
            seconds = `0${time.getSeconds()}`
        }
		return `${hour}:${minutes}:${seconds}`
	}

    startTime()

	return (
		<div className='time-card'>
			<p className='time-card__time'>{generateTime()}</p>
		</div>
	)
}

export default TimeCard
