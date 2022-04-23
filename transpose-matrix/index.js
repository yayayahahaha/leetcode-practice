// https://leetcode.com/problems/transpose-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = function (matrix) {
  const result = []
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i]
    for (let j = 0; j < row.length; j++) {
      const num = row[j]
      result[j % row.length] = result[j % row.length] || []
      result[j % row.length].push(num)
    }
  }
  return result
}

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]),
  [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
  ]
)
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6]
  ]),
  [
    [1, 4],
    [2, 5],
    [3, 6]
  ]
)
