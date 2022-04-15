// https://leetcode.com/problems/minimum-bit-flips-to-convert-number
/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  let s = dec2bin(start)
  let g = dec2bin(goal)

  const length = s.length > g.length ? s.length : g.length
  s = s.padStart(length, '0')
  g = g.padStart(length, '0')

  return [...Array(length)].reduce((sum, c, i) => {
    if (s[i] !== g[i]) sum++
    return sum
  }, 0)

  function dec2bin(dec) {
    return (dec >>> 0).toString(2)
  }
}

console.log(minBitFlips(10, 7), 3)
console.log(minBitFlips(3, 4), 3)
