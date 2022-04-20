// https://leetcode.com/problems/minimum-absolute-difference-in-bst/
// TODO 這個應該有更好的解法
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  const list = _do(root).sort((a, b) => a - b)

  let min = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < list.length - 1; i++) {
    const number = list[i]
    const next = list[i + 1]
    if (next - number < min) min = next - number
  }
  return min

  function _do(node, list = []) {
    if (!node) return list
    list.push(node.val)
    _do(node.left, list)
    _do(node.right, list)

    return list
  }
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(4)
root.left = new TreeNode(2)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right = new TreeNode(6)

const root2 = new TreeNode(543)
root2.left = new TreeNode(384)
root2.left.right = new TreeNode(445)
root2.right = new TreeNode(652)
root2.right.right = new TreeNode(699)

// console.log(getMinimumDifference(root), 1)
console.log(getMinimumDifference(root2), 47)
