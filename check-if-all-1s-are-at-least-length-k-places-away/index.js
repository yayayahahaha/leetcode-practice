// https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const kLengthApart = function (nums, k) {
  let startCount = false
  let zeroCount = 0

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if (num) {
      if (!startCount) startCount = true
      else if (startCount) {
        if (zeroCount < k) return false
        zeroCount = 0
      }
    } else if (startCount) zeroCount++
  }
  return true
}

console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2), false)
console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2), true)
console.log(kLengthApart([0, 1, 0, 0, 0], 3), true)
console.log(kLengthApart([1, 1, 1, 1, 1], 0), true)
console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1, 0], 2), true)
