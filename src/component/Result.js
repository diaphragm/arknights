import React from 'react'
// import '../style/Result.css'
import ButtonTable from 'data/ButtonTable'


const Result = ({result}) => {
  console.log(result)

  const lookupButtonLabel = (value) => {
    return ButtonTable.flat().find(button => button.value === value)
  }

  return (
    <div id="output">
      {result.map(({ tags, chars }, i) => {
        if (chars.length === 0) { return null }

        const minRarity = Math.min(...chars.map(char => char.rarity))
        let note
        if (minRarity >= 4) {
          note = <div className="note">[★{minRarity}以上確定！]</div>
        }

        return (
          <div className={`result rarity${minRarity}`} key={i}>
            <div className="tags">
              {tags.map((tag, j) => {
                const label = lookupButtonLabel(tag).label
                return <div className="tag" key={j}>{label}</div>
              })}
            </div>
            {note}
            <div className="characters">
              {chars.map((char, j) => {
                return <div className="character" key={j}>★{char.rarity} {char.name}</div>
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Result
