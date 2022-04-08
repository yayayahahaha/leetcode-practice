// https://leetcode.com/problems/kth-largest-element-in-a-stream/submissions/
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.nums = nums.sort((a, b) => b - a)
  this.k = k
  this.index = this.k - 1
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  for (var i = 0; i <= this.index; i++) {
    const num = this.nums[i]
    if (num === undefined) {
      this.nums.push(val)
      break
    }

    if (val > num) {
      this.nums.splice(i, 0, val)
      break
    }
  }

  return this.nums[this.index]
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

var obj = new KthLargest(1, [])
console.log(obj.add(-3))
console.log(obj.add(-2))
console.log(obj.add(-4))
console.log(obj.add(0))
console.log(obj.add(4))

// var obj = new KthLargest(3, [4, 5, 8, 2])
// var param_1 = obj.add(3)
// console.log(param_1)
// var param_1 = obj.add(5)
// console.log(param_1)
// var param_1 = obj.add(10)
// console.log(param_1)
// var param_1 = obj.add(9)
// console.log(param_1)
// var param_1 = obj.add(4)
// console.log(param_1)
