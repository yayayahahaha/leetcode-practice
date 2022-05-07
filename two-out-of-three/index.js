// https://leetcode.com/problems/two-out-of-three/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
const twoOutOfThree = function (nums1, nums2, nums3) {
  const pruneNums1 = listToMap(nums1)
  const pruneNums2 = listToMap(nums2)
  const pruneNums3 = listToMap(nums3)

  // console.log('pruneNums1: ', pruneNums1)
  // console.log('pruneNums2: ', pruneNums2)
  // console.log('pruneNums3: ', pruneNums3)

  const result = [...pruneNums1, ...pruneNums2, ...pruneNums3].reduce((map, num) => {
    if (isNaN(map[num])) map[num] = 0
    map[num]++
    return map
  }, {})
  return Object.keys(result).filter(num => result[num] >= 2)

  function listToMap(list) {
    return Object.keys(list.reduce((map, num) => Object.assign(map, { [num]: true }), {}))
  }
}

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]), [3, 2])

console.log(twoOutOfThree([3, 1], [2, 3], [1, 2]), [2, 3, 1])

console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5]), [])
