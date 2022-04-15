// TODO 這個還沒寫完... 應該說寫完後會 timeout
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  return prices
    .reduce((list, price, index) => {
      // console.log('price: ', price)
      const result = count(price, prices.slice(index))
      list.push(result)
      return list
    }, [])
    .sort((a, b) => b - a)[0]

  function count(price, future) {
    const max = future.sort((a, b) => b - a)[0]
    return max - price
  }
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5)
// console.log(maxProfit([7, 1]), 5)
// console.log(maxProfit([7, 6, 4, 3, 1]), 0)
