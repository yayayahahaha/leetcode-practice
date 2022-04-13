// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/
/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const map = s.split('').reduce((map, c) => Object.assign(map, { [c]: map[c] ? map[c] + 1 : 1 }), {})
  const cList = Object.keys(map)

  let current = map[cList[0]]
  for (var i = 1; i < cList.length; i++) {
    const c = map[cList[i]]
    if (c !== current) return false
    current = c
  }
  return true
}

console.log(areOccurrencesEqual('abacbc'))
