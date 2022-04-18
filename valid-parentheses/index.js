// 感謝 Sean 的協助
// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const map = {
    '}': '{',
    ']': '[',
    ')': '('
  }

  const list = []
  for (var i = 0; i < s.length; i++) {
    const char = s[i]
    if (isStart(char)) {
      list.push(char)
    } else if (isClose(char)) {
      const previous = list.pop()
      if (previous !== map[char]) return false
    }
  }

  return !list.length

  function isStart(s) {
    switch (s) {
      case '{':
      case '[':
      case '(':
        return true
    }
    return false
  }
  function isClose(s) {
    switch (s) {
      case '}':
      case ']':
      case ')':
        return true
    }
    return false
  }
}

console.log(isValid('()'), true)
console.log(isValid('()[]{}'), true)
console.log(isValid('(]'), false)
console.log(isValid('(('), false)
