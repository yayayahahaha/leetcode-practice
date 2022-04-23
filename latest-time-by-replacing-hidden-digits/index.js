// https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/
/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
  let result = ''

  if (time[0] === '?' && (time[1] < 4 || time[1] === '?')) result += 2
  else if (time[0] === '?') result += 1
  else result += time[0]

  if (time[1] === '?' && result[0] === '2') result += 3
  else if (time[1] === '?') result += 9
  else result += time[1]

  result += ':'

  if (time[3] === '?') result += 5
  else result += time[3]

  if (time[4] === '?') result += 9
  else result += time[4]

  return result
}

console.log(maximumTime('2?:?0'), '23:50')
console.log(maximumTime('0?:3?'), '09:39')
console.log(maximumTime('1?:22'), '19:22')
