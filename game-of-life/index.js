// https://leetcode.com/problems/game-of-life/
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const map = {}

  for (var i = 0; i < board.length; i++) {
    const row = board[i]

    for (var j = 0; j < row.length; j++) {
      const key = `${i}-${j}`
      map[key] = row[j]
      row[j] = _countNeighbor(row[j], i, j)
    }
  }

  function _countNeighbor(life, i, j) {
    const pi = i - 1
    const previous = board[pi]

    const current = board[i]

    const ni = i + 1
    const next = board[ni]

    const pj = j - 1
    const nj = j + 1

    const count = []

    if (previous) {
      previous[pj] !== undefined && count.push(checkPreivousLife(previous[pj], pi, pj))
      previous[j] !== undefined && count.push(checkPreivousLife(previous[j], pi, j))
      previous[nj] !== undefined && count.push(checkPreivousLife(previous[nj], pi, nj))
    }
    current[pj] !== undefined && count.push(checkPreivousLife(current[pj], i, pj))
    current[nj] !== undefined && count.push(checkPreivousLife(current[nj], i, nj))
    if (next) {
      next[pj] !== undefined && count.push(checkPreivousLife(next[pj], ni, pj))
      next[j] !== undefined && count.push(checkPreivousLife(next[j], ni, j))
      next[nj] !== undefined && count.push(checkPreivousLife(next[nj], ni, nj))
    }

    function checkPreivousLife(num, i, j) {
      const key = `${i}-${j}`
      const mapValue = map[key]

      if (mapValue !== undefined) return mapValue
      return num
    }

    let countNum = 0
    for (var i = 0; i < count.length; i++) {
      countNum += count[i]
      if (countNum > 3) return 0
    }

    if (countNum === 3) return 1

    if (life === 1) return countNum === 2 ? 1 : 0
    return 0
  }
}

const result = gameOfLife([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
])
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
