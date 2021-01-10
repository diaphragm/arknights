import React from 'react'
import 'style/TagButton.css'
import 'style/common/tag.css'

const TagButton = ({ label, value, onChange, checked }) => {
  const handleChange = () => {
    if (onChange) {
      onChange({ label, value, checked: !checked })
    }
  }

  const className = ['TagButton', 'tag']
  if (checked) className.push('checked')

  return (
    <div className={className.join(' ')} onClick={handleChange}>{label}</div>
  )
}

export default TagButton
