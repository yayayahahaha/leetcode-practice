// https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/
/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  // a 97 z 122

  let steps = 0
  let now = 'a'.charCodeAt()
  for (let i = 0; i < word.length; i++) {
    const target = word[i].charCodeAt()
    const [max, min] = [Math.max(target, now), Math.min(target, now)]

    const way1 = max - min
    const way2 = 122 - max + min - 96

    const delta = Math.min(way1, way2)

    steps += delta
    steps++
    now = target
  }

  return steps
}

console.log(minTimeToType('abc'), 5)
console.log(minTimeToType('bza'), 7)
console.log(minTimeToType('zjpc'), 34)
