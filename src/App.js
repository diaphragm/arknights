import React from 'react'
import './style/App.css'
import Operators from './data/operators.json'
import Tags from './data/tags.json'
import Title from './components/Title'
import TagList from './components/TagList'
import Result from './components/Result'

const App = () => {
  const operators = Operators.operators
  const tags = Tags.tags

  return (
    <div className="App container">
      <Title />
      <TagList tags={tags} />
      <Result operators={operators} />
    </div>
  )
}

export default App
