// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = function (mat, k) {
  const result = []
  for (let i = 0; i < mat.length; i++) {
    const people = mat[i]
    const n = people.filter(Boolean).length
    result.push({ n, i })
  }
  return result
    .sort((a, b) => a.n - b.n)
    .map(item => item.i)
    .splice(0, k)
}

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1]
    ],
    3
  ),
  [2, 0, 3]
)
console.log(
  kWeakestRows(
    [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0]
    ],
    2
  ),
  [0, 2]
)
