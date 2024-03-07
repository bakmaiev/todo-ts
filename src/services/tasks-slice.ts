import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface Task {
  id: number
  name: string
  completed: boolean
}

export interface TaskState {
  list: Task[]
  filter: 'all' | 'completed' | 'current'
}

const initialState: TaskState = {
  'list': [],
  'filter': 'all',
}

const tasksSlice = createSlice({
  'name': 'tasks',
  initialState,
  'reducers': {
    'addTask': (state, action: PayloadAction<string>) => {
      state.list.push({
        'id': Date.now(),
        'name': action.payload,
        'completed': false,
      })
    },
    'toggleTaskStatus': (state, action: PayloadAction<number>) => {
      const currentTask = state.list.find((task) => task.id === action.payload)
      if (currentTask) {
        currentTask.completed = !currentTask.completed
      }
    },
    'setFilter': (
      state,
      action: PayloadAction<'all' | 'completed' | 'current'>,
    ) => {
      state.filter = action.payload
    },
    'deleteTask': (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((task) => task.id !== action.payload)
    },
  },
})

export const { addTask, toggleTaskStatus, setFilter, deleteTask } =
  tasksSlice.actions

export default tasksSlice.reducer
