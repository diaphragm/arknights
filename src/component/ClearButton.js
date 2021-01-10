import React from 'react'
import 'style/ClearButton.css'

const ClearButton = ({ onClick }) => {
  return (
    <span className="button clear" onClick={onClick}>×</span>
  )
}

export default ClearButton
