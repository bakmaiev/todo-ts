import React from 'react'

interface InputProperties {
  sign: string
  onChange: (_: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProperties> = ({ sign, onChange }) => {
  return (
    <input
      className='border p-2 rounded w-full'
      placeholder='New task'
      value={sign}
      onChange={onChange}
    />
  )
}

export default Input
