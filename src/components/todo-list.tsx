import React, { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter, selectTasks } from '../services/selectors'
import {
  addTask,
  setFilter,
  toggleTaskStatus,
  deleteTask,
} from '../services/tasks-slice'
import Input from './input'
import Button from './button'
import Select from './select'
import TaskItem from './todo-item'
import TaskStats from './stats'
import { filterTasks } from '../helpers/filter-tasks'

const SYMBOL_LIMIT = 100

// eslint-disable-next-line max-lines-per-function
const TodoList: React.FC = () => {
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState('')
  const tasks = useSelector(selectTasks)
  const filter = useSelector(selectFilter)
  const filteredTasks = filterTasks(tasks, filter)

  const handleAddTask = () => {
    if (newTask.length <= SYMBOL_LIMIT && newTask.length > 0) {
      dispatch(addTask(newTask))
      setNewTask('')
    }
  }

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(event.target.value as 'all' | 'completed' | 'current'))
  }

  const handleToggleTaskStatus = (id: number) => {
    dispatch(toggleTaskStatus(id))
  }

  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask(id))
  }

  return (
    <div className='p-4 bg-gray-100 rounded shadow-lg'>
      <Input
        sign={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <Button onClick={handleAddTask}>Add Task</Button>
      <Select filter={filter} onChange={handleFilterChange} />
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTaskStatus={handleToggleTaskStatus}
          onDeleteTask={handleDeleteTask}
        />
      ))}
      <TaskStats tasks={tasks} />
    </div>
  )
}

export default TodoList
