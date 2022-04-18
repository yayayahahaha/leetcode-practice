// https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 這個果然不能直接轉成數字 +1
var plusOne = function (digits) {
  let plus = true
  for (let i = digits.length - 1; i >= 0; i--) {
    if (!plus) break

    digits[i]++
    plus = false
    if (digits[i] === 10) {
      digits[i] = 0
      plus = true

      if (i === 0) {
        digits.unshift(1)
      }
    }
  }

  return digits
}

console.log(plusOne([1, 2, 3]), [1, 2, 4])
console.log(plusOne([4, 3, 2, 1]), [4, 3, 2, 2])
console.log(plusOne([9]), [1, 0])
