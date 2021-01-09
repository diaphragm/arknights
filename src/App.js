import React from 'react';
import './App.css';

const CHARACTER_TABLE_URL = 'https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/ja_JP/gamedata/excel/character_table.json'
const GACHA_TABLE_URL = 'https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/ja_JP/gamedata/excel/gacha_table.json'
const buttonList = [
  [
    { label: '先鋒タイプ', value: 'PIONEER' },
    { label: '前衛タイプ', value: 'WARRIOR' },
    { label: '狙撃タイプ', value: 'SNIPER' },
    { label: '重装タイプ', value: 'TANK' },
    { label: '医療タイプ', value: 'MEDIC' },
    { label: '補助タイプ', value: 'SUPPORT' },
    { label: '術士タイプ', value: 'CASTER' },
    { label: '特殊タイプ', value: 'SPECIAL' },
  ],
  [
    { label: '近距離', value: 'MELEE' },
    { label: '遠距離', value: 'RANGED' },
  ],
  [
    { label: '初期', value: '初期' },
    { label: 'エリート', value: 'SENIOR' },
    { label: '上級エリート', value: 'TOP' },
  ],
  [
    { label: '治療', value: '治療' },
    { label: '支援', value: '支援' },
    { label: '火力', value: '火力' },
    { label: '範囲攻撃', value: '範囲攻撃' },
    { label: '減速', value: '減速' },
    { label: '生存', value: '生存' },
    { label: '防御', value: '防御' },
    { label: '弱化', value: '弱化' },
    { label: '強制移動', value: '強制移動' },
    { label: '牽制', value: '牽制' },
    { label: '爆発力', value: '爆発力' },
    { label: '召喚', value: '召喚' },
    { label: '高速再配置', value: '高速再配置' },
    { label: 'COST回復', value: 'COST回復' },
    { label: 'ロボット', value: 'ROBOT' },
  ],
]

const fetchCharData = async () => {
  const [characterTable, gachaTable] = await Promise.all([
    (async () => await(await fetch(CHARACTER_TABLE_URL)).json())(),
    (async () => await(await fetch(GACHA_TABLE_URL)).json())()
  ])

  const availableCharNameList = gachaTable.recruitDetail
    .replace(/<@rc\.eml>|<\/>/g, '')
    .match(/(?<=★+\n).+(?=\n--------------------|$)/g)
    .map(l => l.split(' / '))
    .flat()

  console.log(availableCharNameList)

  return Object.entries(characterTable)
    .filter(([key, char]) => availableCharNameList.includes(char.name))
    .map(([key, char]) => {
      const tags = char.tagList || []
      tags.push(char.position, char.profession)
      if (char.rarity + 1 === 1) { tags.push('ROBOT') }
      if (char.rarity + 1 === 5) { tags.push('SENIOR') }
      if (char.rarity + 1 === 6) { tags.push('TOP') }
      return { key, name: char.name, rarity: char.rarity + 1, tags }
    })
}

const combination = (nums, k) => {
  let ans = [];
  if (nums.length < k) {
    return []
  }
  if (k === 1) {
    for (let i = 0; i < nums.length; i++) {
      ans[i] = [nums[i]];
    }
  } else {
    for (let i = 0; i < nums.length - k + 1; i++) {
      let row = combination(nums.slice(i + 1), k - 1);
      for (let j = 0; j < row.length; j++) {
        ans.push([nums[i]].concat(row[j]));
      }
    }
  }
  return ans;
}


const ClearButton = ({onClick}) => {
  return (
    <span className="button" onClick={onClick} style={{ fontWeight: 'bold' }}>×</span>
  )
}

const TagButton = ({label, value, onChange, isChecked}) => {
  const handleChange = (event) => {
    if (onChange) {
      onChange({ label, value, checked: event.target.checked})
    }
  }

  return (
    <label>
      <input type="checkbox" value={value} onChange={handleChange} checked={isChecked} />
      <span>{label}</span>
    </label>
  )
}

const App = () => {
  const [charData, setCharData] = React.useState([])
  React.useEffect(() => {
    (async () => {
      setCharData(await fetchCharData())
    })()
  }, [])

  const [checkedTagList, setCheckedTagList] = React.useState([])
  const handleCheck = ({label, value, checked}) => {
    if (checked) {
      if (!checkedTagList.includes(value)) {
        setCheckedTagList([...checkedTagList, value])
      }
    } else {
      setCheckedTagList(checkedTagList.filter(x => x !== value))
    }
  }
  const clearCheck = () => {
    setCheckedTagList([])
  }

  const [result, setResult] = React.useState([])
  const findCharacter = (tags) => {
    return charData.filter(char => {
      if (char.rarity === 6 && !tags.includes('TOP')) {
        return false
      }

      return tags.every(tag => char.tags.includes(tag))
    })
  }
  const calculate = () => {
    console.log(checkedTagList)
    const combineTags = [...Array(checkedTagList.length).keys()].reverse()
      .map(i => i + 1)
      .map(i => combination(checkedTagList, i))
      .flat()
    const chars = combineTags.map(tags => ({ tags, chars: findCharacter(tags) }))
    setResult(chars)
  }
  React.useEffect(calculate, [checkedTagList])

  const lookupButtonLabel = (value) => {
    return buttonList.flat().find(button => button.value === value)
  }

  let output
  if (result.length === 0) {
    output = (
      <div id="noinfo">NO INFO/</div>
    )
  } else {
    output = (
      <div id="output">
        {result.map(({tags, chars}, i) => {
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

  return (
    <div className="App">
      <div id="container">
        <div className="title"><span>アークナイツ</span> <span>公開求人検索</span></div>

        <div className="button-list">
          <div>
            <ClearButton onClick={clearCheck} />
          </div>
          {buttonList.map((group, i) => {
            return (
              <div key={i}>
                {group.map(({label, value}, i) => {
                  return (
                    <TagButton label={label} value={value} onChange={handleCheck} isChecked={checkedTagList.includes(value)} key={i} />
                  )
                })}
              </div>
            )
          })}
        </div>

        {output}
      </div>
    </div>
  )
}

export default App
