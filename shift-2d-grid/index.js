/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const n = grid[0].length

  const flat = grid.flat()
  for (let i = 0; i < k; i++) {
    const last = flat.pop()
    flat.unshift(last)
  }

  const result = [[]]
  let cIndex = 0
  for (var i = 0; i < flat.length; i++) {
    if (result[cIndex].length === n) {
      result.push([])
      cIndex++
    }
    result[cIndex].push(flat[i])
  }

  return result
}

const result = shiftGrid(
  [
    [3, 8, 1, 9],
    [19, 7, 2, 5],
    [4, 6, 11, 10],
    [12, 0, 21, 13]
  ],
  4
)
console.log(result)
