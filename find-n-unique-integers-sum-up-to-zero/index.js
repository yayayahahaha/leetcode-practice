// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  const result = n % 2 ? [0] : []
  const resultLength = result.length
  for (let i = 0; i < (n - resultLength) / 2; i++) {
    const num = i + 1
    result.push(num)
    result.push(-1 * num)
  }
  return result
};

console.log(sumZero(5), check(sumZero(5), 5))
// console.log(sumZero(3), check(sumZero(3), 3))
// console.log(sumZero(1), check(sumZero(1), 1))

function check(array, length) {
  return [array.reduce((sum, num) => sum + num), array.length === length]
}
