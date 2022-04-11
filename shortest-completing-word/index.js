// https://leetcode.com/problems/shortest-completing-word/
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlateRow, words) {
  const licensePlate = licensePlateRow
    .split('')
    .filter(c => /[a-zA-Z]/.test(c))
    .map(c => c.toLowerCase())

  const result = words.filter(word => licensePlate.reduce((result, c) => {
    if (!result) return false
    const r = word.includes(c)
    if (r) {
      word = word.replace(c, '')
    }
    return result && r
  }, true))

  const [first] = result.sort((a, b) => a.length - b.length)


  return first || ''
}

console.log(shortestCompletingWord('1s3 PSt', ['step', 'steps', 'stripe', 'stepple']))
