import React from 'react'

interface SelectProperties {
  filter: string;
  onChange: (_: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProperties> = ({ filter, onChange }) => (
  <select
    className="border p-2 rounded mt-2 w-full"
    value={filter}
    onChange={onChange}
  >
    <option value="all">All</option>
    <option value="completed">Completed</option>
    <option value="current">Current</option>
  </select>
)

export default Select
