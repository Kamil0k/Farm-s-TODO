import React, { useState } from 'react'

import Header from './components/Header/Header'
import NewTODOButton from './components/NewTODOButton/NewTODOButton'
import NewTODOForm from './components/NewTODOForm/NewTODOForm'
import ListTODO from './components/ListTODO/ListTODO'

const DUMMY_TODOS = [
	{
		id: '1',
		title: 'Harvest a wheat!',
		date: new Date(2022, 7, 22),
		message: 'This day I have to harvest the wheat from over 25 hetares fields.',
		category: 1,
	},
	{
		id: '2',
		title: 'Fed horses!',
		date: new Date(2022, 8, 2),
		message: 'Feed 20 horses on your farm.',
		category: 2,
	},
	{
		id: '3',
		title: 'Fix harvester!',
		date: new Date(2022, 8, 10),
		message: 'I have to fix the harvester, which was broken while harvesting the wheat in this year.',
		category: 3,
	},
]

const App = () => {
	const [todos, setTodos] = useState(DUMMY_TODOS)
	const [isAddTodo, setIsAddTodo] = useState(false)
	const [selectedCategory, setSelectedCategory] = useState(0)

	const saveTodoDataHandler = enteredTodoData => {
		setTodos(prevTodo => {
			return [enteredTodoData, ...prevTodo]
		})
		setIsAddTodo(false)
	}

	const removeItemHandler = todoId => {
		setTodos(prevTodos => {
			const updatedTodos = prevTodos.filter(todo => todo.id !== todoId)
			return updatedTodos
		})
	}

	const startAddingNewTodo = () => {
		setIsAddTodo(true)
	}

	const stopAddingNewTodo = () => {
		setIsAddTodo(false)
	}

	const selectedOptionHandler = selectedOption => {
		setSelectedCategory(selectedOption)
	}

	const filterTodos = todos.filter(todo => {
		if (selectedCategory.toString() !== '0') {
			return todo.category.toString() === selectedCategory.toString()
		}
		return todo
	})

	return (
		<div>
			<Header />
			{isAddTodo ? (
				<NewTODOForm onClose={stopAddingNewTodo} onSaveTodoData={saveTodoDataHandler} />
			) : (
				<NewTODOButton onAdd={startAddingNewTodo} />
			)}
			<ListTODO
				items={filterTodos}
				onRemoveItem={removeItemHandler}
				selected={selectedCategory}
				onSelectedOption={selectedOptionHandler}
			/>
		</div>
	)
}

export default App
