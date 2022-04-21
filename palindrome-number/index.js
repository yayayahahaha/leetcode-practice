// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = `${x}`
  for (var i = 0; i < x.length / 2; i++) {
    const last = x[x.length - 1 - i]
    const current = x[i]
    if (current !== last) return false
  }
  return true
}

console.log(isPalindrome(121), true)
console.log(isPalindrome(-121), false)
console.log(isPalindrome(10), false)
