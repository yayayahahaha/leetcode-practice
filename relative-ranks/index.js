// https://leetcode.com/problems/relative-ranks/
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  return score
    .map((s, index) => ({ s, index }))
    .sort((a, b) => b.s - a.s)
    .map((item, index) => {
      if (index === 0) item.name = 'Gold Medal'
      else if (index === 1) item.name = 'Silver Medal'
      else if (index === 2) item.name = 'Bronze Medal'
      else item.name = `${index + 1}`
      return item
    })
    .sort((a, b) => a.index - b.index)
    .map(item => item.name)
}

console.log(findRelativeRanks([5, 4, 3, 2, 1]), ['Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5'])
console.log(findRelativeRanks([10, 3, 8, 9, 4]), ['Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4'])
