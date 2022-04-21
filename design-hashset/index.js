// https://leetcode.com/problems/design-hashset/
var MyHashSet = function () {
  this.set = new Set()
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  this.set.add(key)
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  this.set.delete(key)
}

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.set.has(key)
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
;['MyHashSet', 'add', 'add', 'contains', 'contains', 'add', 'contains', 'remove', 'contains'][
  ([], [1], [2], [1], [3], [2], [2], [2], [2])
]
