// https://leetcode.com/problems/validate-binary-search-tree/
// 雖然寫完了，但效能超爛
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
 * @return {boolean}
 */
const isValidBST = function (node, result = true) {
  if (!node) return result
  if (!result) return false

  const rightDeepResult = isValidBST(node.right, result)
  const leftDeepResult = isValidBST(node.left, result)

  const rightResult = compareRight(node)
  const leftResult = compareLeft(node)

  const deepResult = rightDeepResult && leftDeepResult
  const currentResult = rightResult && leftResult

  return deepResult && currentResult

  function compareRight(node) {
    if (!node.right) return true
    const rightList = getTreeList(node.right)
    if (!rightList.length) return true

    for (let i = 0; i < rightList.length; i++) {
      if (rightList[i].val <= node.val) return false
    }

    return true
  }
  function compareLeft(node) {
    if (!node.left) return true
    const leftList = getTreeList(node.left)
    if (!leftList.length) return true

    for (let i = 0; i < leftList.length; i++) {
      if (leftList[i].val >= node.val) return false
    }

    return true
  }
  function getTreeList(node) {
    const result = _deep(node)
    return result.sort((a, b) => b.val - a.val)

    function _deep(node, list = []) {
      if (!node) return list
      list.push(node)
      _deep(node.left, list)
      _deep(node.right, list)
      return list
    }
  }
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(2)
root.left = new TreeNode(1)
root.right = new TreeNode(3)

const root2 = new TreeNode(5)
root2.left = new TreeNode(1)
root2.right = new TreeNode(4)
root2.right = new TreeNode(4)
root2.right.left = new TreeNode(3)
root2.right.right = new TreeNode(6)

const root3 = new TreeNode(5)
root3.left = new TreeNode(4)
root3.right = new TreeNode(6)
root3.right.left = new TreeNode(3)
root3.right.right = new TreeNode(7)

const root4 = new TreeNode(2)
root4.left = new TreeNode(2)
root4.right = new TreeNode(2)

const root5 = new TreeNode(32)
root5.left = new TreeNode(26)
root5.left.left = new TreeNode(19)
root5.left.left.right = new TreeNode(27)
root5.right = new TreeNode(47)
root5.right.right = new TreeNode(56)

console.log(isValidBST(root), true)
console.log(isValidBST(root2), false)
console.log(isValidBST(root3), false)
console.log(isValidBST(root4), false)
console.log(isValidBST(root5), false)
