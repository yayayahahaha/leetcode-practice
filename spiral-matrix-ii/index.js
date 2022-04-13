// https://leetcode.com/problems/spiral-matrix-ii/
//leetcode.com/problems/spiral-matrix-ii/
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const directionList = ['right', 'down', 'left', 'up']
  let directionIndex = 0
  let axis = [0, 0]

  const result = [[]]
  result[0][0] = 1

  for (let i = 2; i <= Math.pow(n, 2); i++) {
    ;[x, y] = nextAxis(axis)
    axis = [x, y]

    if (!result[y]) result[y] = []
    result[y][x] = i
  }

  return result

  function nextAxis(axis) {
    const [x, y] = axis
    let [a, b] = []

    const direction = directionList[directionIndex]
    switch (direction) {
      case 'right':
        ;[a, b] = [x + 1, y]
        break
      case 'down':
        ;[a, b] = [x, y + 1]
        break
      case 'left':
        ;[a, b] = [x - 1, y]
        break
      case 'up':
        ;[a, b] = [x, y - 1]
        break
    }

    if (a > n - 1 || a < 0 || b > n - 1 || b < 0 || (result[b] && result[b][a])) {
      directionIndex = (directionIndex + 1) % 4
      return nextAxis(axis)
    }

    return [a, b]
  }
}

const result = generateMatrix(4)
console.log(JSON.stringify(result, null, 2))
// [[1,2], [4,3]]
