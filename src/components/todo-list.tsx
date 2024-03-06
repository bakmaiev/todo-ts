import React, { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter, selectTasks } from '../services/selectors'
import { addTask, setFilter, toggleTaskStatus } from '../services/tasks-slice'

const SYMBOL_LIMIT = 100

const TodoList: React.FC = () => {
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState('')
  const tasks = useSelector(selectTasks)
  const filter = useSelector(selectFilter)
  const handleAddTask = () => {
    if (newTask.length <= SYMBOL_LIMIT) {
      dispatch(addTask(newTask))
      setNewTask('')
    } else {
      alert(`Please do not use more than ${SYMBOL_LIMIT} characters.`)
    }
  }
  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(event.target.value as 'all' | 'completed' | 'current'))
  }
  const handleToggleTaskStatus = (id: number) => {
    dispatch(toggleTaskStatus(id))
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') { return true }
    if (filter === 'completed') { return task.completed }
    if (filter === 'current') { return !task.completed }
  })

  return (
    <div className='w-full max-w-md p-4 bg-gray-100 rounded shadow-lg'>
      <textarea
        maxLength={SYMBOL_LIMIT}
        placeholder='New task'
        className='border p-2 rounded w-full h-28 resize-none'
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button
        className='bg-blue-500 text-white p-2 rounded mt-2 w-full'
        onClick={handleAddTask}
      >
        Add Task
      </button>
      <select
        className='border p-2 rounded mt-2 w-full'
        value={filter}
        onChange={handleFilterChange}
      >
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='current'>Current</option>
      </select>
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className={`p-2 mt-2 rounded cursor-pointer ${
            task.completed ? 'bg-green-500' : 'bg-red-500'
          }`}
          onClick={() => handleToggleTaskStatus(task.id)}
        >
          <p className='text-wrap break-words'>
            {task.name} - {task.completed ? 'Completed' : 'Not completed'}
          </p>
        </div>
      ))}
      <p className='mt-4'>
        Completed tasks: {tasks.filter((task) => task.completed).length}
      </p>
      <p>Current tasks: {tasks.filter((task) => !task.completed).length}</p>
    </div>
  )
}

export default TodoList
