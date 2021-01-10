import React from 'react'
import 'style/App.css'
import Title from 'component/Title'
import ButtonList from 'component/ButtonList'
import Result from 'component/Result'
import { fetchCharData } from 'lib/fetch'
import { calculateAvailableCharacters } from 'lib/calculate'

const App = () => {
  const [charData, setCharData] = React.useState([])
  const [checkedTagList, setCheckedTagList] = React.useState([])
  const [result, setResult] = React.useState([])

  // charData初期化
  React.useEffect(() => {
    (async () => {
      setCharData(await fetchCharData())
    })()
  }, [])

  React.useEffect(() => {
    setResult(calculateAvailableCharacters(checkedTagList, charData))
  }, [checkedTagList, charData])

  return (
    <div className="App">
      <div id="container">
        <Title />

        <ButtonList checkedList={checkedTagList} onChange={(list => setCheckedTagList(list))} />

        {result.length > 0
          ? <Result result={result} />
          : <div id="noinfo">NO INFO/</div>
        }
      </div>
    </div>
  )
}

export default App
