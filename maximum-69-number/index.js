// https://leetcode.com/problems/maximum-69-number/
/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number = function (num) {
  return +`${num}`.replace(/6/, 9)
}

console.log(maximum69Number(9669), 9969)
console.log(maximum69Number(9996), 9999)
console.log(maximum69Number(9999), 9999)
