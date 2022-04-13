//leetcode.com/problems/single-number
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = nums.reduce((map, num, index) => {
    map[num] = map[num] ? undefined : true
    return map
  }, {})

  return JSON.stringify(map).match(/-?\d+/)[0]
}

console.log(singleNumber([2, 2, 1]), 1)
console.log(singleNumber([4, 1, 2, 1, 2]), 4)
console.log(singleNumber([1]), 1)
console.log(singleNumber([1, 0, 1]), 0)
console.log(singleNumber([2, 2, 1]), 1)
