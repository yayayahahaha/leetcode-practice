// 神人解法: https://leetcode.com/problems/convert-bst-to-greater-tree/discuss/292435/javascript
// https://leetcode.com/problems/convert-bst-to-greater-tree/submissions/
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
var convertBST = function (root) {
  const list = getNumber(root) || []
  const total = list.reduce((sum, node) => sum + node.val, 0)

  let subed = 0
  list
    .sort((a, b) => a.val - b.val)
    .forEach(node => {
      subed += node.val
      node.val = total - subed + node.val
    })

  return root

  function getNumber(node, list = []) {
    if (!node) return
    list.push(node)

    getNumber(node.right, list)
    getNumber(node.left, list)

    return list
  }
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(4)
root.left = new TreeNode(1)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(2)
root.left.right.right = new TreeNode(3)
root.right = new TreeNode(6)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(7)
root.right.right.right = new TreeNode(8)

console.log(convertBST(root))
