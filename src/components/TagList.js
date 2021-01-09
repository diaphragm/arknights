import React from 'react'
import '../style/TagList.css'

const TagList = (props) => {
  const tags = props.tags
  const list = tags.map( (data) => {
    // const category = data.category
    const sublist = data.tags.map( (tag) => {
      return (
        <label key={tag.value} >
          <input type="checkbox" value={tag.value} /><span>{tag.label}</span>
        </label>
      )
    })

    return (
      <div key={data.category}>
        {sublist}
      </div>
    )
  })


  console.log(tags)

  return (
    <div className="TagList">
      {list}
    </div>
  )
}

export default TagList
