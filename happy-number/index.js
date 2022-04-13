// https://leetcode.com/problems/happy-number
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n, map = {}) {
  if (n === 1) return true
  if (map[n]) return false

  map[n] = true

  const sum = `${n}`.split('').reduce((sum, num) => sum + Math.pow(+num, 2), 0)
  return isHappy(sum, map)
}

console.log(isHappy(19), true)
console.log(isHappy(2), false)
