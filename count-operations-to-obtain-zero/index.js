// https://leetcode.com/problems/count-operations-to-obtain-zero/

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
  let count = 0
  let big
  let small

  while (num1 !== 0 && num2 !== 0) {
    count++
    big = num1 > num2 ? num1 : num2
    small = num1 < num2 ? num1 : num2
    num1 = big - small
    num2 = small
  }
  return count
}

console.log(countOperations(2, 3), 3)
console.log(countOperations(10, 10), 1)
