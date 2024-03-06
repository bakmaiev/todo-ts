import React from 'react'
import { Task } from '../services/tasks-slice'

interface TaskStatsProperties {
  tasks: Task[];
}

const TaskStats: React.FC<TaskStatsProperties> = ({ tasks }) => (
  <>
    <div className='mt-4'>
      Completed tasks: {tasks.filter((task) => task.completed).length}
    </div>
    <div>Current tasks: {tasks.filter((task) => !task.completed).length}</div>
  </>
)

export default TaskStats
