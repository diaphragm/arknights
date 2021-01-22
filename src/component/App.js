import React from 'react'
import 'style/App.css'
import Title from 'component/Title'
import ButtonList from 'component/ButtonList'
import Output from 'component/Output'
import { fetchCharData } from 'lib/fetch'
import { calculateAvailableCharacters } from 'lib/calculate'

const App = () => {
  const [charData, setCharData] = React.useState([])
  const [isCharDataLoaded, setIsCharDataLoaded] = React.useState(false)
  const [checkedTagList, setCheckedTagList] = React.useState([])
  const [result, setResult] = React.useState([])

  // charData初期化
  React.useEffect(() => {
    (async () => {
      setCharData(await fetchCharData())
      setIsCharDataLoaded(true)
    })()
  }, [])

  React.useEffect(() => {
    setResult(calculateAvailableCharacters(checkedTagList, charData))
  }, [checkedTagList, charData])

  return (
    <div className="App">
      <Title />
      {isCharDataLoaded
        ? (<>
          <ButtonList list={checkedTagList} onChange={(list => setCheckedTagList(list))} />
          <Output result={result} />
        </>)
        : 'Loading...'
      }
    </div>
  )
}

export default App
