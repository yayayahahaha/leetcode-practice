// https://leetcode.com/problems/generate-parentheses/submissions/
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
  const max = Math.pow(2, n * 2)
  let list = []
  for (let i = 0; i < max; i++) {
    list.push(dec2bin(i).padStart(n * 2, 0))
  }

  list = list.map((item) => {
    const re = item.split('').map(r => r.replace(/0/g, '-1'))
    return re
  }).filter(numList => {
    return numList.reduce((sum, num) => {
      if (sum < 0) return -1
      return sum += Number(num)
    }, 0) === 0
  }).map((numList) => {
    return numList.map(num => {
      if (num === '1') return '('
      return ')'
    }).join('')
  })

  return list

  function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }
};

