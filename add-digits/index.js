// https://leetcode.com/problems/add-digits/
/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function (num) {
  const splitResult = `${num}`.split('')
  if (splitResult.length === 1) return num

  const sum = splitResult.reduce((sum, num) => sum + Number(num), 0)
  return addDigits(sum)
}

console.log(addDigits(38), 2)
console.log(addDigits(0), 0)
