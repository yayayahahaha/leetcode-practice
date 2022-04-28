// https://leetcode.com/problems/flood-fill/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let current = image[sr][sc]

  const floodCenters = [[sr, sc]]
  for (let i = 0; i < floodCenters.length; i++) {
    const [row, col] = floodCenters[i]
    const nexts = fourAxis(row, col, image)

    nexts.forEach(axis => {
      const [row, col] = axis
      if (current === image[row][col] && image[row][col] !== newColor) {
        floodCenters.push([row, col])
        image[row][col] = newColor
      }
    })
  }
  image[sr][sc] = newColor

  return image

  function fourAxis(row, col, image) {
    const rowMax = image.length - 1
    const colMax = image[0].length - 1

    const up = [row - 1, col]
    const right = [row, col + 1]
    const down = [row + 1, col]
    const left = [row, col - 1]

    return [up, right, down, left].filter(axis => {
      const [row, col] = axis
      if (row < 0 || row > rowMax || col < 0 || col > colMax) return false
      return true
    })
  }
}

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 1, 1]
    ],
    1,
    1,
    1
  )
)

/*console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1]
    ],
    1,
    1,
    2
  ),
  [
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1]
  ]
)
console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0]
    ],
    0,
    0,
    2
  ),
  [
    [2, 2, 2],
    [2, 2, 2]
  ]
)
console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 1, 0]
    ],
    1,
    1,
    2
  ),
  [
    [0, 0, 0],
    [0, 2, 0]
  ]
)*/
