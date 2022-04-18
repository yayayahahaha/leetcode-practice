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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const list = []
  getNum(root, list)

  return list.sort((a, b) => a - b)[k - 1]

  function getNum(node, list) {
    if (!node) return
    list.push(node.val)

    getNum(node.left, list)
    getNum(node.right, list)
  }
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(3)
root.left = new TreeNode(1)
root.left.right = new TreeNode(2)
root.right = new TreeNode(4)

const root2 = new TreeNode(5)
root2.right = new TreeNode(6)
root2.left = new TreeNode(3)
root2.left.right = new TreeNode(4)
root2.left.left = new TreeNode(2)
root2.left.left.left = new TreeNode(1)

console.log(kthSmallest(root, 1), 1)
console.log(kthSmallest(root2, 3), 3)
