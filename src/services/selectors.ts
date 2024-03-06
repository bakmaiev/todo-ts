import { TaskState } from './tasks-slice'

export const selectTasks = (state: { tasks: TaskState }) => state.tasks.list
export const selectFilter = (state: { tasks: TaskState }) => state.tasks.filter
