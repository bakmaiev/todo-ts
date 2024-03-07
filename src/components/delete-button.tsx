import React from 'react'
import { FaTrash } from 'react-icons/fa'

interface DeleteButtonProperties {
  id: number
  onDeleteTask: (_: number) => void
}

const DeleteButton: React.FC<DeleteButtonProperties> = ({
  onDeleteTask,
  id,
}) => {
  return (
    <button
      className='flex justify-center items-center'
      onClick={() => onDeleteTask(id)}
    >
      <FaTrash />
    </button>
  )
}

export default DeleteButton
