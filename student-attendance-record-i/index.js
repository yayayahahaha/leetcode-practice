// https://leetcode.com/problems/student-attendance-record-i/
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  const isAbsent = s.match(/A/g) && s.match(/A/g).length >= 2
  const isLate = s.match(/LLL/)
  return !(isAbsent || isLate)
}

console.log(checkRecord('PPALLP'), true)
console.log(checkRecord('PPALLL'), false)
