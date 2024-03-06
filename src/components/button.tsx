import React from 'react'

interface ButtonProperties {
  onClick: () => void
  children: React.ReactNode
}

const Button: React.FC<ButtonProperties> = ({ onClick, children }) => (
  <button
    className="bg-blue-500 text-white p-2 rounded mt-2 w-full"
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
