const CHARACTER_TABLE_URL = 'https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData_YoStar/master/ja_JP/gamedata/excel/character_table.json'
const GACHA_TABLE_URL = 'https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData_YoStar/master/ja_JP/gamedata/excel/gacha_table.json'

const fetchCharacterTable = async () => {
  return await (await fetch(CHARACTER_TABLE_URL)).json()
}

const fetchGachaTable = async () => {
  return await (await fetch(GACHA_TABLE_URL)).json()
}

const fixCharRarity = (char) => {
  const rarity = Number(char.rarity.replace("TIER_", ""))
  return {...char, rarity}
}

export const fetchCharData = async () => {
  const [characterTable, gachaTable] = await Promise.all([
    fetchCharacterTable(),
    fetchGachaTable()
  ])

  const availableCharNameList = gachaTable.recruitDetail
    .replace(/<@rc\.eml>|<\/>/g, '')
    .match(/★+\n.+(\n--------------------|$)/g)
    .map(l => l.split('\n')[1])
    .map(l => l.split('/'))
    .flat()
    .map(c => c.trim())

  console.log(availableCharNameList)

  return Object.entries(characterTable)
    .filter(([key, char]) => key.search('char_') === 0 && availableCharNameList.includes(char.name))
    .map(([key, char]) => [key, fixCharRarity(char)])
    .map(([key, char]) => {
      const tags = char.tagList || []
      tags.push(char.position, char.profession)
      if (char.rarity === 1) tags.push('ROBOT')
      if (char.rarity === 5) tags.push('SENIOR')
      if (char.rarity === 6) tags.push('TOP')

      return { key, name: char.name, rarity: char.rarity, tags }
    })
}
