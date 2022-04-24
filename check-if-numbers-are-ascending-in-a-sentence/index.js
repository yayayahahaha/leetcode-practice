// https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  const list = s
    .split(/[^\d]/)
    .filter(s => s)
    .map(n => +n)
  for (var i = 0; i < list.length - 1; i++) {
    const current = list[i]
    const next = list[i + 1]
    if (next <= current) return false
  }
  return true
}

console.log(areNumbersAscending('1 box has 3 blue 4 red 6 green and 12 yellow marbles'), true)
console.log(areNumbersAscending('hello world 5 x 5'), false)
console.log(areNumbersAscending('sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s'), false)
