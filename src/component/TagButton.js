import React from 'react'
import 'style/TagButton.css'

const TagButton = ({ label, value, onChange, isChecked }) => {
  const handleChange = (event) => {
    if (onChange) {
      onChange({ label, value, checked: event.target.checked })
    }
  }

  return (
    <label>
      <input type="checkbox" value={value} onChange={handleChange} checked={isChecked} />
      <span>{label}</span>
    </label>
  )
}

export default TagButton
