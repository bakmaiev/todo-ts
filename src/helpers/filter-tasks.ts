import { Task } from '../services/tasks-slice'

export const filterTasks = (tasks: Task[], filter: string) => {
  return tasks.filter((task) => {
    if (filter === 'all') return true
    if (filter === 'completed') return task.completed
    if (filter === 'current') return !task.completed
    return false
  })
}
