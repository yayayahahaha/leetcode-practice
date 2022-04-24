// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const [sum, product] = `${n}`.split('').reduce(
    ([sum, produt], num) => {
      sum += +num
      produt *= +num
      return [sum, produt]
    },
    [0, 1]
  )
  return product - sum
}

console.log(subtractProductAndSum(234), 15)
console.log(subtractProductAndSum(4421), 21)
