// https://leetcode.com/problems/relative-sort-array/
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function (arr1, arr2) {
  const map2 = arr2.reduce((map, num) => Object.assign(map, { [num]: true }), {})
  const map = arr1.reduce((map, num) => {
    map[num] = map[num] || 0
    map[num]++
    return map
  }, {})

  let result = []
  arr2.forEach(num => {
    const beConcat = new Array(map[num]).fill(num)
    result = result.concat(beConcat)
    map[num] = 0
  })

  const rest = Object.keys(map)
    .filter(num => !map2[num])
    .map(num => new Array(map[num]).fill(+num))
    .flat()

  result = result.concat(rest.sort((a, b) => a - b))
  return result
}

/*console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]),
  [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
)*/
/*console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]), [22, 28, 8, 6, 17, 44])*/

console.log(
  relativeSortArray(
    [2, 21, 43, 38, 0, 42, 33, 7, 24, 13, 12, 27, 12, 24, 5, 23, 29, 48, 30, 31],
    [2, 42, 38, 0, 43, 21]
  ),
  [2, 42, 38, 0, 43, 21, 5, 7, 12, 12, 13, 23, 24, 24, 27, 29, 30, 31, 33, 48]
)
