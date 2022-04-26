// https://leetcode.com/problems/teemo-attacking/
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let damage = 0
  for (let i = 0; i < timeSeries.length - 1; i++) {
    const poisionSec = timeSeries[i] // 1, 4
    const nextPoisionSec = timeSeries[i + 1] // 4, undefined
    const delta = nextPoisionSec - poisionSec

    if (delta <= duration) damage += delta
    else damage += duration
  }
  return damage + duration
}

console.log(findPoisonedDuration([1, 4], 2), 4)
console.log(findPoisonedDuration([1, 2], 2), 3)
console.log(findPoisonedDuration([1, 2, 3, 4, 5, 6, 7, 8, 9], 1), 9)
