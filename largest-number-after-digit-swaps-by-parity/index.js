// https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/
/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
  const one = []
  const two = []

  const list = `${num}`.split('').map(n => {
    if (n % 2) one.push(+n)
    else two.push(+n)

    return { isOne: n % 2 }
  })

  console.log(list)

  one.sort((a, b) => a - b)
  two.sort((a, b) => a - b)

  return +list.map(n => (n.isOne ? one.pop() : two.pop())).join('')
}

console.log(largestInteger(1234), 3412)
console.log(largestInteger(65875), 87655)
