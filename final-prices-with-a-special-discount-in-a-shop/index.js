// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const list = []
  for (var i = 0; i < prices.length; i++) {
    const money = prices[i]
    const discount = getDiscount(money, prices, i)
    list.push(money - discount)
  }
  return list

  function getDiscount(money, prices, index) {
    for (var i = index + 1; i < prices.length; i++) {
      if (money >= prices[i]) return prices[i]
    }
    return 0
  }
}

// console.log([8, 4, 6, 2, 3], finalPrices([8, 4, 6, 2, 3]), [4, 2, 4, 2, 3])
// console.log([10, 1, 1, 6], finalPrices([10, 1, 1, 6]), [9, 0, 1, 6])
console.log([3, 6, 3, 2], finalPrices([3, 6, 3, 2]), [0, 3, 1, 2])
