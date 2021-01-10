import React from 'react'
import 'style/ButtonList.css'
import TagButton from 'component/TagButton'
import ClearButton from 'component/ClearButton'
import ButtonTable from 'data/ButtonTable'

const ButtonList = ({checkedList, onChange}) => {
  const onClear = () => {
    onChange([])
  }

  const onChecked = ({ value, checked }) => {
    if (checked) {
      if (!checkedList.includes(value)) {
        onChange([...checkedList, value])
      }
    } else {
      onChange(checkedList.filter(x => x !== value))
    }
  }

  return (
    <div className="button-list">
      <div>
        <ClearButton onClick={onClear} />
      </div>
      {ButtonTable.map((group, i) => {
        return (
          <div key={i}>
            {group.map(({ label, value }, i) => {
              return (
                <TagButton label={label} value={value} onChange={onChecked} isChecked={checkedList.includes(value)} key={i} />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default ButtonList
