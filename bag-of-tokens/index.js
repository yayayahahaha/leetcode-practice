// 這題沒有解出來 (
// https://leetcode.com/problems/bag-of-tokens/
/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */

var bagOfTokensScore = function (tokens, power) {
  // faceup: tokens-, power-, score+
  // facedown: tokens-, power+, score-
  const list = []
  let score = 0
  // console.log('power:', power)
  // console.log('tokens:', tokens)
  // console.log('===================================')

  tokens.sort((a, b) => a - b)
  while (tokens.length > 1 || (tokens.length === 1 && tokens[0] <= power)) {
    const first = tokens[0]
    const last = tokens.slice(-1)[0]

    if (power >= first) {
      power -= first
      score++
      tokens.splice(0, 1)
    } else if (score > 0 && power) {
      power += last
      score--
      tokens.splice(-1, 1)
    } else {
      break
    }

    list.push(score)

    // console.log('first: ', first)
    // console.log('last: ', last)
    // console.log('power:', power)
    // console.log('score: ', score)
    // console.log('----------')
  }

  return list.sort((a, b) => b - a)[0] || 0
}

// console.log(bagOfTokensScore([100], 50), 0)
console.log(bagOfTokensScore([100, 200], 150), 1)
// console.log(bagOfTokensScore([100, 200, 300, 400], 200), 2)
