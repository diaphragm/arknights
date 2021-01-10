import React from 'react'
import 'style/ClearButton.css'
import 'style/common/tag.css'

const ClearButton = ({ onClick }) => {
  return (
    <span className="ClearButton tag" onClick={onClick}>×</span>
  )
}

export default ClearButton
