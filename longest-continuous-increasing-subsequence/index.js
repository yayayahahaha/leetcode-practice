// https://leetcode.com/problems/longest-continuous-increasing-subsequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length === 1) return 1

  let count = []
  let index = 0
  for (var i = 0; i < nums.length - 1; i++) {
    count[index] = count[index] || 1
    const current = nums[i]
    const next = nums[i + 1]
    if (current < next) count[index]++
    else index++
  }
  return count.sort((a, b) => b - a)[0]
}

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]), 3)
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]), 1)
