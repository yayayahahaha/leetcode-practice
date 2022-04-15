// TODO 有空再看看
// https://leetcode.com/problems/trim-a-binary-search-tree/
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  const firstRoot = findRoot(root)
  if (!firstRoot) return null

  // 1,2
  // -> 0
  // firstLeft = findRoot(firstRoot.left) // null x
  // firstRight = findRoot(firstRoot.right) // node 2 v

  // node2Left = findRoot(firstRight.left) // node 1 v
  // node2Right = findRoot(firstRight.right) // null x

  // node1Left = findRoot(node2Left.left) // null
  // node1Right = findRoot(node2Left.right) // null

  firstRoot.left = trimBST(firstRoot.left, low, high)
  firstRoot.right = trimBST(firstRoot.right, low, high)

  return firstRoot

  function findRoot(node) {
    if (!node) return null
    if (!isValid(node)) {
      if (node.val > high) return findRoot(node.left)
      else return findRoot(node.right)
    }
    return node
  }
  function isValid(node) {
    return node.val <= high && node.val >= low
  }
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(3)
root.left = new TreeNode(0)
root.right = new TreeNode(4)
root.left.right = new TreeNode(2)
root.left.right.left = new TreeNode(1)
// console.log(trimBST(root, 1, 3))
// console.log(trimBST(root, 1, 2))

const root2 = new TreeNode(1)
root2.left = new TreeNode(0)
root2.right = new TreeNode(2)
console.log(trimBST(root2, 1, 2), [1, null, 2])
