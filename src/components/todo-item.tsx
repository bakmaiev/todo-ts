import React from 'react'
import { Task } from '../services/tasks-slice'
import DeleteButton from './delete-button'

interface TaskItemProperties {
  task: Task
  onToggleTaskStatus: (_: number) => void
  onDeleteTask: (_: number) => void
}

const TaskItem: React.FC<TaskItemProperties> = ({
  task,
  onToggleTaskStatus,
  onDeleteTask,
}) => (
  <>
    <div
      className={`flex gap-2 justify-between p-2 mt-2 rounded cursor-pointer ${
        task.completed ? 'bg-emerald-500' : 'bg-red-400'
      }`}
      onClick={() => onToggleTaskStatus(task.id)}
    >
      <p className={`${task.completed ? 'line-through' : 'none'}`}>
        {task.name}
      </p>
      <DeleteButton onDeleteTask={onDeleteTask} id={task.id}/>
    </div>
  </>
)

export default TaskItem
