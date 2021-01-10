import React from 'react'
import 'style/Output.css'
import Result from 'component/Result'

const Output = ({result}) => {
  console.log(result)

  if (result.length > 0) {
    return (
      <div className="Output">
        {result.map(({ tags, chars }, i) => {
          if (chars.length === 0) { return null }

          return <Result tags={tags} chars={chars} key={i}/>
        })}
      </div>
    )
  } else {
    return (
      <div className="Output noinfo">NO INFO/</div>
    )
  }
}

export default Output
