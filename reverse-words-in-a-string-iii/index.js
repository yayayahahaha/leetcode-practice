// https://leetcode.com/problems/reverse-words-in-a-string-iii/submissions/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(' ')
    .map(s => s.split('').reverse().join(''))
    .join(' ')
}

// 直接在網站上就寫完了，所以懶得拿範例
