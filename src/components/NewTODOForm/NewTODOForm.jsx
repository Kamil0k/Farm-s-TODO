import React, { useState } from 'react'

import '../../index.css'
import './NewTODOForm.css'

const NewTODOForm = props => {
	const [enteredTitle, setEnteretTitle] = useState('')
	const [enteredDate, setEnteretDate] = useState('')
	const [enteredMessage, setEnteretMessage] = useState('')
	const [chosenCategory, setChosenCategory] = useState(0)
	const [isValidTitle, setIsValidTitle] = useState(true)
	const [isValidDate, setIsValidDate] = useState(true)
	const [isValidMessage, setIsValidMessage] = useState(true)
	const [isValidCategory, setIsValidCategory] = useState(true)

	const titleChangeHandler = event => {
		if (event.target.value.trim().length > 0) {
			setIsValidTitle(true)
		}
		setEnteretTitle(event.target.value)
	}
	const dateChangeHandler = event => {
		if (event.target.value.trim().length > 0) {
			setIsValidDate(true)
		}
		setEnteretDate(event.target.value)
	}
	const messageChangeHandler = event => {
		if (event.target.value.trim().length > 0) {
			setIsValidMessage(true)
		}
		setEnteretMessage(event.target.value)
	}
	const category1ChangeHandler = () => {
		setChosenCategory(1)
		setIsValidCategory(true)
	}
	const category2ChangeHandler = () => {
		setChosenCategory(2)
		setIsValidCategory(true)
	}
	const category3ChangeHandler = () => {
		setChosenCategory(3)
		setIsValidCategory(true)
	}

	const formSubmitHandler = event => {
		event.preventDefault()
		if (enteredTitle.trim().length === 0) {
			setIsValidTitle(false)
		}
		if (enteredDate.trim().length === 0) {
			setIsValidDate(false)
		}
		if (enteredMessage.trim().length === 0) {
			setIsValidMessage(false)
		}
		if (chosenCategory === 0) {
			setIsValidCategory(false)
		}

		if (
			enteredTitle.trim().length === 0 ||
			enteredDate.trim().length === 0 ||
			enteredMessage.trim().length === 0 ||
			chosenCategory === 0
		) {
			return ''
		} else {
			const newTodoData = {
				id: Math.random().toString(),
				title: enteredTitle,
				date: new Date(enteredDate),
				category: chosenCategory,
				message: enteredMessage,
			}
			props.onSaveTodoData(newTodoData)
			setEnteretTitle('')
			setEnteretDate('')
			setEnteretMessage('')
		}
	}
	return (
		<div className='form-area wrapper'>
			<form onSubmit={formSubmitHandler}>
				<div className='first-group'>
					<div className='box'>
						<p style={{ color: isValidTitle ? '#aa7e38' : 'red' }} className='label'>
							Title:
						</p>
						<input
							style={{ borderColor: isValidTitle ? '#aa7e38' : 'red' }}
							type='text'
							value={enteredTitle}
							onChange={titleChangeHandler}
						/>
					</div>
					<div className='box'>
						<p style={{ color: isValidDate ? '#aa7e38' : 'red' }} className='label'>
							Date:
						</p>
						<input
							style={{ borderColor: isValidDate ? '#aa7e38' : 'red' }}
							type='date'
							value={enteredDate}
							onChange={dateChangeHandler}
						/>
					</div>
				</div>
				<div className='second-group'>
					<p style={{ color: isValidCategory ? '#aa7e38' : 'red' }} className='label'>
						Category:
					</p>
					<div className='radio-group'>
						<div className='r'>
							<input type='radio' id='harvest' name='radio' onChange={category1ChangeHandler} />
							<label htmlFor='harvest'>Harvesting the crop</label>
						</div>
						<div className='r'>
							<input type='radio' id='animal' name='radio' onChange={category2ChangeHandler} />
							<label htmlFor='animal'>Animal care</label>
						</div>
						<div className='r'>
							<input type='radio' id='farm' name='radio' onChange={category3ChangeHandler} />
							<label htmlFor='farm'>Farm work</label>
						</div>
					</div>
				</div>
				<div className='third-group'>
					<p style={{ color: isValidMessage ? '#aa7e38' : 'red' }} className='label'>
						Message:
					</p>
					<textarea
						style={{ borderColor: isValidMessage ? '#aa7e38' : 'red' }}
						cols='30'
						rows='10'
						value={enteredMessage}
						onChange={messageChangeHandler}></textarea>
				</div>
				<button type='submit' className='button-add'>
					Add TODO
				</button>
				<button onClick={props.onClose} className='button-cancel'>
					Cancel
				</button>
			</form>
		</div>
	)
}

export default NewTODOForm
