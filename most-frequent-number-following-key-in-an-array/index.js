/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
  const result = nums
    .map((num, index) => ({ num, index }))
    .filter(item => key === item.num)
    .map(item => nums[item.index + 1])
    .reduce((map, num) => {
      map[num] = map[num] || 0
      map[num]++
      return map
    }, {})

  const max = +Object.keys(result).sort((a, b) => result[b] - result[a])[0]

  return max
}

console.log(mostFrequent([1, 100, 200, 1, 100], 1), 100)
console.log(mostFrequent([2, 2, 2, 2, 3], 2), 2)
