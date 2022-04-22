// https://leetcode.com/problems/diameter-of-binary-tree/

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
var __diameterOfBinaryTree = function (root) {
  const list = getList(root)
  const result = list.map(node => each(node)).sort((a, b) => b - a)[0]

  return result

  function getList(node, list = []) {
    if (!node) return list
    list.push(node)
    getList(node.left, list)
    getList(node.right, list)
    return list
  }

  function each(root) {
    const left = getHeight(root.left)
    const right = getHeight(root.right)

    return left + right

    function getHeight(root) {
      return __getDeep(root)

      function __getDeep(node, height = 0) {
        if (!node) return height

        height++
        const left = __getDeep(node.left, height)
        const right = __getDeep(node.right, height)

        return Math.max(left, right)
      }
    }
  }
}
// 這是別人寫的 best, 完全不知道為什麼要加左右
var diameterOfBinaryTree = function (root) {
  let result = 1
  dfs(root)

  function dfs(root) {
    if (!root) {
      return 0
    }
    let l = dfs(root.left)
    let r = dfs(root.right)
    result = Math.max(result, l + r + 1)

    console.log('node:', root.val, 'result:', result)

    return Math.max(l, r) + 1
  }

  return result - 1
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right = new TreeNode(3)

const root2 = new TreeNode(1)
root2.left = new TreeNode(2)

console.log(diameterOfBinaryTree(root), 3)
console.log(diameterOfBinaryTree(root2), 1)
