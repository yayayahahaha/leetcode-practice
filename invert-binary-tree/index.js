// https://leetcode.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */
var invertTree = function (root, preivous) {
  // console.log('-----')
  // console.log(root)
  // console.log(preivous)
  // console.log('======')

  if (!root) return null
  ;[root.left, root.right] = [root.right, root.left]

  root.left = invertTree(root.left, root)
  root.right = invertTree(root.right, root)

  return root
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
root.right = new TreeNode(7)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(9)

const root2 = new TreeNode(3)
root2.left = new TreeNode(1)
root2.right = new TreeNode(2)

// console.log(root)
console.log(invertTree(root))
