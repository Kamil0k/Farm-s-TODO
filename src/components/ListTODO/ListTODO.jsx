import React from 'react'

import '../../index.css'
import './ListTODO.css'

import Filter from '../Filter/Filter'
import NewTODO from '../NewTODO/NewTodo'

const ListTODO = props => {
	return (
		<div className='list wrapper'>
			<h2 className='list__title'>
				Farm's TODO <i className='fa-solid fa-wheat-awn'></i>
			</h2>
			<Filter selected={props.selected} onSelectedOption={props.onSelectedOption} />
			{props.items.length === 0 ? (
				<h2 className='list__subtitle'>No any Farm's TODO</h2>
			) : (
				<div className='list__todo'>
					{props.items.map(todo => (
						<NewTODO
							key={todo.id}
							id={todo.id}
							title={todo.title}
							date={todo.date}
							message={todo.message}
							category={todo.category}
							onRemove={props.onRemoveItem}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default ListTODO
