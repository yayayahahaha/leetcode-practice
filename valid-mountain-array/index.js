// https://leetcode.com/problems/valid-mountain-array/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let everdown = false
  let everup = false
  for (var i = 0; i < arr.length - 1; i++) {
    const num = arr[i]
    const next = arr[i + 1]
    if (next > num && !everdown) {
      everup = true
      continue
    } else if (next < num) {
      everdown = true
    } else {
      return false
    }
  }
  return everup && everdown
}

console.log(validMountainArray([2, 1]), false)
console.log(validMountainArray([3, 5, 5]), false)
console.log(validMountainArray([0, 3, 2, 1]), true)
