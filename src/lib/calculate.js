// https://tech-blog.s-yoshiki.com/2019/06/1342/
export const combination = (nums, k) => {
  let ans = []
  if (nums.length < k) {
    return []
  }
  if (k === 1) {
    for (let i = 0; i < nums.length; i++) {
      ans[i] = [nums[i]]
    }
  } else {
    for (let i = 0; i < nums.length - k + 1; i++) {
      let row = combination(nums.slice(i + 1), k - 1)
      for (let j = 0; j < row.length; j++) {
        ans.push([nums[i]].concat(row[j]))
      }
    }
  }
  return ans
}

export const findCharacter = (tags, charData) => {
  return charData.filter(char => {
    // 上級エリートタグ無しの場合は★6を除外
    if (char.rarity === 6 && !tags.includes('TOP')) return false

    return tags.every(tag => char.tags.includes(tag))
  })
}

export const calculateAvailableCharacters = (tags, charData) => {
  const combineTags = [...Array(tags.length).keys()].reverse()
    .map(i => i + 1)
    .map(i => combination(tags, i))
    .flat()

  return combineTags.map(tags => ({ tags, chars: findCharacter(tags, charData) }))
}
