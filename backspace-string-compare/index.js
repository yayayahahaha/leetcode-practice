// https://leetcode.com/problems/backspace-string-compare/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const resultS = s
    .split('')
    .reduce((list, char) => {
      if (char === '#') {
        list.pop()
        return list
      }
      list.push(char)
      return list
    }, [])
    .join('')
  const resultT = t
    .split('')
    .reduce((list, char) => {
      console.log(list)
      if (char === '#') {
        list.pop()
        return list
      }
      list.push(char)
      return list
    }, [])
    .join('')

  return resultS === resultT
}
