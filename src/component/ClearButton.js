import React from 'react'

const ClearButton = ({ onClick }) => {
  return (
    <span className="button" onClick={onClick} style={{ fontWeight: 'bold' }}>×</span>
  )
}

export default ClearButton
