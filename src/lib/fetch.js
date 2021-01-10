const CHARACTER_TABLE_URL = 'https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/ja_JP/gamedata/excel/character_table.json'
const GACHA_TABLE_URL = 'https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/ja_JP/gamedata/excel/gacha_table.json'

export const fetchCharData = async () => {
  const [characterTable, gachaTable] = await Promise.all([
    (async () => await (await fetch(CHARACTER_TABLE_URL)).json())(),
    (async () => await (await fetch(GACHA_TABLE_URL)).json())()
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
