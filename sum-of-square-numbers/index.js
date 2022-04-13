/**
 * @param {number} total
 * @return {boolean}
 */
var judgeSquareSum = function (total) {
  const halfTotal = Math.ceil(Math.pow(total, 0.5))

  const min = 0
  let max = halfTotal

  for (let i = max; i >= Math.ceil(halfTotal / 2); i--) {
    const xx = i * i

    for (let j = min; j <= Math.ceil(halfTotal / 2); j++) {
      const yy = j * j

      console.log('xx: ', xx, 'yy: ', yy, 'sum: ', xx + yy)

      if (xx + yy === total) return true
      if (xx + yy > total) {
        // max--
        break
      }
    }
  }

  return false
}

// console.log(`input: 8`, judgeSquareSum(8), true)
console.log(`input: 32`, judgeSquareSum(32), true)
// console.log(`input: 5`, judgeSquareSum(5), true)
// console.log(`input: 0`, judgeSquareSum(0), true)
// console.log(`input: 2`, judgeSquareSum(2), true)
// console.log(`input: 1000`, judgeSquareSum(1000), true)
