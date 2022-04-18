// https://leetcode.com/problems/maximum-number-of-balls-in-a-box/
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  const map = {}
  for (let num = lowLimit; num <= highLimit; num++) {
    const total = num
      .toString()
      .split('')
      .reduce((sum, c) => sum + +c, 0)
    map[total] = map[total] || 0
    map[total]++
  }

  return map[Object.keys(map).sort((a, b) => map[b] - map[a])[0]]
}

console.log(countBalls(1, 10), 2)
console.log(countBalls(5, 15), 2)
console.log(countBalls(19, 28), 2)
