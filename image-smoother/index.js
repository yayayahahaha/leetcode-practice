// https://leetcode.com/problems/image-smoother/

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const result = []
  for (var i = 0; i < img.length; i++) {
    const row = img[i]
    result[i] = result[i] || []
    for (var j = 0; j < row.length; j++) {
      const number = row[j]
      result[i][j] = getRound(i, j, img)
    }
  }
  return result

  function getRound(i, j, img) {
    const previousRow = img[i - 1]
    const currentRow = img[i]
    const nextRow = img[i + 1]
    const previousJ = j - 1
    const nextJ = j + 1

    const tl = previousRow !== undefined ? previousRow[previousJ] : null
    const tc = previousRow !== undefined ? previousRow[j] : null
    const tr = previousRow !== undefined ? previousRow[nextJ] : null

    const cl = currentRow[previousJ]
    const cc = currentRow[j]
    const cr = currentRow[nextJ]

    const bl = nextRow !== undefined ? nextRow[previousJ] : null
    const bc = nextRow !== undefined ? nextRow[j] : null
    const br = nextRow !== undefined ? nextRow[nextJ] : null

    const { sum, length } = [tl, tc, tr, cl, cc, cr, bl, bc, br].reduce(
      ({ sum, length }, number) => {
        if (isNumber(number)) {
          sum += number
          length++
        }
        return { sum, length }
      },
      { sum: 0, length: 0 }
    )

    return Math.floor(sum / length)
  }
  function isNumber(value) {
    return /^\d+$/.test(value)
  }
}

console.log(
  imageSmoother([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ]),
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
)
console.log(
  imageSmoother([
    [100, 200, 100],
    [200, 50, 200],
    [100, 200, 100]
  ]),
  [
    [137, 141, 137],
    [141, 138, 141],
    [137, 141, 137]
  ]
)
