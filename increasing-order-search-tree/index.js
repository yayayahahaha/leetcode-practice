// https://leetcode.com/problems/increasing-order-search-tree/submissions/
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
var increasingBST = function (root) {
  const rowList = []
  getNumber(root, rowList)

  const list = rowList.sort((a, b) => a - b)

  const newRoot = new TreeNode(list[0])
  let tempNode = null
  list.forEach(num => {
    if (!tempNode) {
      tempNode = newRoot
      return
    }
    tempNode.right = new TreeNode(num)
    tempNode = tempNode.right
  })

  return newRoot

  function getNumber(node, list) {
    if (!node) return
    list.push(node.val)

    getNumber(node.left, list)
    getNumber(node.right, list)
  }
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(5)
root.left = new TreeNode(3)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.left.left.left = new TreeNode(1)
root.right = new TreeNode(6)
root.right.right = new TreeNode(8)
root.right.right.left = new TreeNode(7)
root.right.right.left = new TreeNode(9)

console.log(increasingBST(root))
