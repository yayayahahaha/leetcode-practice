// https://leetcode.com/problems/string-matching-in-an-array/
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  return words
    .sort((a, b) => a.length - b.length)
    .reduce((result, word, index, list) => {
      for (let i = index + 1; i < list.length; i++) {
        const next = list[i]
        const reg = new RegExp(word)
        if (reg.test(next)) {
          result.push(word)
          break
        }
      }
      return result
    }, [])
}

console.log(stringMatching(['mass', 'as', 'hero', 'superhero'], ['as', 'hero']))
console.log(stringMatching(['leetcode', 'et', 'code'], ['et', 'code']))
console.log(stringMatching(['blue', 'green', 'bu'], []))
console.log(stringMatching(['leetcoder', 'leetcode', 'od', 'hamlet', 'am']), ['leetcode', 'od', 'am'])
