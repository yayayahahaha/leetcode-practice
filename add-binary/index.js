// https://leetcode.com/problems/add-binary/
// 故意用比較特殊的方式寫好像蠻有趣的
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  const maxLength = a.length > b.length ? a.length : b.length
  a = a.padStart(maxLength, '0')
  b = b.padStart(maxLength, '0')

  const result = []

  let more = 0
  for (var i = maxLength - 1; i >= 0; i--) {
    const nA = +a[i]
    const nB = +b[i]
    switch (nA + nB + more) {
      case 0:
        result.unshift('0')
        more = 0
        break
      case 1:
        result.unshift('1')
        more = 0
        break
      case 2:
        result.unshift('0')
        more = 1
        break
      case 3:
        result.unshift('1')
        more = 1
        break
    }
  }
  if (more) result.unshift('1')
  return result.join('')
}

console.log(addBinary('11', '1'), '100')
console.log(addBinary('1010', '1011'), '10101')
