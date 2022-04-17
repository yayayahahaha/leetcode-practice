// https://leetcode.com/problems/peak-index-in-a-mountain-array/

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return i
  }
}

console.log(peakIndexInMountainArray([0, 1, 0]), 1)
console.log(peakIndexInMountainArray([0, 2, 1, 0]), 1)
console.log(peakIndexInMountainArray([0, 10, 50, 2]), 2)
