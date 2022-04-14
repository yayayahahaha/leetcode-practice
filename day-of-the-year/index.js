// https://leetcode.com/problems/day-of-the-year/

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  const dateInstace = new Date(date)
  const dateYear = dateInstace.getFullYear()

  const firstDay = new Date(`${dateYear}-01-01`)
  const day = 1000 * 60 * 60 * 24

  return (dateInstace.valueOf() - firstDay.valueOf()) / day + 1
}
