import React from 'react'

import '../../index.css'
import './NewTODOButton.css'

const NewTODOButton = (props) => {
	return (
		<div className='area wrapper'>
			<button className='area__button' onClick={props.onAdd}>New TODO</button>
		</div>
	)
}

export default NewTODOButton
