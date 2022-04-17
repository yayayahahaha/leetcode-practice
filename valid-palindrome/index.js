// https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const front = s
    .replace(/[^a-zA-Z0-9]/g, '')
    .toLowerCase()
    .split('')

  for (let i = 0; i < front.length; i++) {
    const lastIndex = front.length - 1 - i
    if (i > lastIndex) break

    const f = front[i]
    const b = front[lastIndex]
    if (f !== b) return false
  }
  return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama'), true)
console.log(isPalindrome('race a car'), false)
console.log(isPalindrome(' '), true)
