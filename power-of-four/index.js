/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n <= 0) return false
  if (n === 0) return false
  if (n === 1) return true
  if (n % 2) return false

  return devide(n)

  function devide(n) {
    if (n === 4) return true
    const result = n / 4
    if (/\./.test(result)) return false
    return devide(result)
  }
}

// console.log(isPowerOfFour(6), false)
// console.log(isPowerOfFour(16), true)
// console.log(isPowerOfFour(5), false)
// console.log(isPowerOfFour(1), true)
console.log(isPowerOfFour(0), true)
