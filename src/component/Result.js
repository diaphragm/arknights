import React from 'react'
import 'style/Result.css'
import 'style/common/tag.css'
import ButtonTable from 'data/ButtonTable'

const Result = ({tags, chars}) => {
  const lookupButtonLabel = (value) => {
    return ButtonTable.flat().find(button => button.value === value)
  }

  const minRarity = Math.min(...chars.map(char => char.rarity))
  const resultRrarity = Math.min(...chars.filter(char => char.rarity >= 3).map(char => char.rarity))

  return (
    <div className={`Result rarity${resultRrarity}`}>
      <div className="tags">
        {tags.map((tag, j) => {
          const label = lookupButtonLabel(tag).label
          return <div className="tag" key={j}>{label}</div>
        })}
      </div>
      {resultRrarity >= 4 && <div className="note">[{minRarity <= 2 && '07:40以上で'}★{resultRrarity}以上確定！]</div>}
      <div className="characters">
        {chars.map((char, j) => {
          return <div className="character" key={j}>★{char.rarity} {char.name}</div>
        })}
      </div>
    </div>
  )

}

export default Result
