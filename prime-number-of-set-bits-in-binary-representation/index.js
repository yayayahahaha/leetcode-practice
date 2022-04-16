// https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  let list = []
  for (let i = left; i <= right; i++) {
    list.push(
      i
        .toString(2)
        .split('')
        .reduce((s, n) => s + +n, 0)
    )
  }

  list = list.filter(i => i !== 1)
  console.log(list)

  return list.filter(n => _isPrime(n)).length

  function _isPrime(num) {
    if (num === 1) return false

    const half = num
    for (let i = 2; i < half; i++) {
      if (half % i === 0) return false
    }

    return true
  }
}

// console.log(countPrimeSetBits(6, 10), 4)
// console.log(countPrimeSetBits(10, 15), 5)
console.log(countPrimeSetBits(990, 1048), 28)
