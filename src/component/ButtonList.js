import React from 'react'
import 'style/ButtonList.css'
import TagButton from 'component/TagButton'
import ClearButton from 'component/ClearButton'
import ButtonTable from 'data/ButtonTable'

const ButtonList = ({list, onChange}) => {
  const onClear = () => {
    onChange([])
  }

  const onChecked = ({ value, checked }) => {
    if (checked) {
      if (!list.includes(value)) {
        onChange([...list, value])
      }
    } else {
      onChange(list.filter(x => x !== value))
    }
  }

  return (
    <div className="ButtonList">
      <div>
        <ClearButton onClick={onClear} />
      </div>
      {ButtonTable.map((group, i) => {
        return (
          <div className="group" key={i}>
            {group.map(({ label, value }, i) => {
              return (
                <TagButton label={label} value={value} onChange={onChecked} checked={list.includes(value)} key={i} />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default ButtonList
