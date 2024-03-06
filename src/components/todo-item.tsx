import React from 'react'
import { Task } from '../services/tasks-slice'

interface TaskItemProperties {
  task: Task
  onToggleTaskStatus: (_: number) => void
}

const TaskItem: React.FC<TaskItemProperties> = ({
  task,
  onToggleTaskStatus,
}) => (
  <div
    key={task.id}
    className={`p-2 mt-2 rounded cursor-pointer ${
      task.completed ? 'bg-green-500' : 'bg-red-500'
    }`}
    onClick={() => onToggleTaskStatus(task.id)}
  >
    {task.name} - {task.completed ? 'Completed' : 'Not completed'}
  </div>
)

export default TaskItem
