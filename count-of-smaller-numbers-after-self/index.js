// https://leetcode.com/problems/count-of-smaller-numbers-after-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// TODO 原本以為很簡單，結果寫出來了但是會 timeout
// 這題是 hard
const countSmaller = function (nums) {
  const result = Array(nums.length).fill(0)
  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      const other = nums[j]
      if (current > other) result[i]++
    }
  }
  return result
}

console.log(countSmaller([5, 2, 6, 1]), [2, 1, 1, 0])
console.log(countSmaller([-1]), [0])
console.log(countSmaller([-1, -1]), [0, 0])
