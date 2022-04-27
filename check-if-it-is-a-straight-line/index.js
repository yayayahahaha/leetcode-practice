// https://leetcode.com/problems/check-if-it-is-a-straight-line/
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function (coordinates) {
  // ax + b = 0
  // a * x1 + b * y1 + c = 0
  // a * x2 + b * y2 + c = 0

  // a * (x2 - x1) + b * (y2 - y1) = 0
  // a * (x2 - x1) / b + (y2 - y1) = 0
  // a / b + (y2 - y1) / (x2 - x1) = 0
  // (x2 - x1) / (y1 - y2) = b / a

  for (let i = 0; i < coordinates.length - 2; i++) {
    const [x1, y1] = coordinates[i]
    const [x2, y2] = coordinates[i + 1]
    const [x3, y3] = coordinates[i + 2]
    const first = (y1 - y2) / (x2 - x1)
    const second = (y2 - y3) / (x3 - x2)

    // console.log('first:', first)
    // console.log('second:', second)
    if (first === Infinity || first === -Infinity) {
      if (second !== Infinity && second !== -Infinity) return false
      continue
    }
    if (first !== second) return false
  }
  return true
}

console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7]
  ]),
  true
)
console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7]
  ]),
  false
)
console.log(
  checkStraightLine([
    [0, 0],
    [0, 1],
    [0, -1]
  ]),
  true
)
console.log(
  checkStraightLine([
    [2, 4],
    [2, 5],
    [2, 8]
  ]),
  true
)
