// https://leetcode.com/problems/recover-binary-search-tree/
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let currentLeft = null
  let currentRight = null

  return checkAll(root)

  function checkAll(root) {
    const list = deep(root)

    const resultError = list.filter(node => !node.result)
    if (!resultError.length) return root

    const [{ val: firstVal }, { val: secondVal }] = resultError
    resultError[0].val = secondVal
    resultError[1].val = firstVal
    list.forEach(node => Object.assign(node, { result: true }))

    return checkAll(root)
  }

  function deep(node, list = []) {
    if (!node) return list
    list.push(node)

    deep(node.right, list)
    currentRight = node
    deep(node.left, list)
    currentLeft = node
    const rightResult = checkRight(node, currentRight)
    const leftResult = checkLeft(node, currentLeft)

    node.result = leftResult && rightResult

    return list
  }
}
function checkLeft(node, currentLeft) {
  if (!node.left) return true
  else if (currentLeft.val < node.val) return true
  else return false
}
function checkRight(node, currentRight) {
  if (!node.right) return true
  else if (currentRight.val > node.val) return true
  else return false
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
root.left = new TreeNode(3)
root.left.right = new TreeNode(2)

const root2 = new TreeNode(3)
root2.left = new TreeNode(1)
root2.right = new TreeNode(4)
root2.right.left = new TreeNode(2)

// console.log(recoverTree(root))
console.log(recoverTree(root2))
