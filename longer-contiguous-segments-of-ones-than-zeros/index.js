// https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/
/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  const zeros = ((s.match(/0+/g) || []).sort((a, b) => b.length - a.length)[0] || []).length
  const ones = ((s.match(/1+/g) || []).sort((a, b) => b.length - a.length)[0] || []).length
  return ones > zeros
}

console.log(checkZeroOnes('1101'), true)
console.log(checkZeroOnes('111000'), false)
console.log(checkZeroOnes('110100010'), false)
