// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/
/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  const [from, to] = s.split(':')
  const [, fromAlpha, fromNum] = from.match(/([A-Z])(\d+)/)
  const [, toAlpha, toNum] = to.match(/([A-Z])(\d+)/)

  const list = []

  for (var i = fromAlpha.charCodeAt(); i <= toAlpha.charCodeAt(); i++) {
    const char = String.fromCharCode(i)

    for (var j = fromNum; j <= toNum; j++) {
      list.push(`${char}${j}`)
    }
  }

  return list
}

console.log(cellsInRange('K1:L2'), ['K1', 'K2', 'L1', 'L2'])
console.log(cellsInRange('A1:F1'), ['A1', 'B1', 'C1', 'D1', 'E1', 'F1'])
