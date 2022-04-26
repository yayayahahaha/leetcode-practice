// https://leetcode.com/problems/excel-sheet-column-title/
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let str = ''
  while (columnNumber > 26) {
    const last = columnNumber % 26 || 26
    const lastChar = String.fromCharCode(64 + last)
    str = lastChar + str
    columnNumber = Math.floor(columnNumber / 26) - (isFloat(columnNumber / 26) ? 0 : 1)
  }

  return String.fromCharCode(64 + columnNumber) + str

  function isFloat(value) {
    return /\./.test(`${value}`)
  }
}

console.log(convertToTitle(1), 'A')
console.log(convertToTitle(28), 'AB')
console.log(convertToTitle(701), 'ZY')
console.log(convertToTitle(123456), 'FZPH')
console.log(convertToTitle(52), 'AZ')
console.log(convertToTitle(1234567), 'BRFGI')
