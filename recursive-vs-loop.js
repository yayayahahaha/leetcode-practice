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

function getNodeByRecursive(node, list = []) {
  if (!node) return null
  list.push(node)
  getNodeByRecursive(node.left, list)
  getNodeByRecursive(node.right, list)
  return list
}

// 這可能要研究一下有沒有辦法呈現那種 left 到底或是 right 到底才執行的那種 recursive
function getNodeByWhileLoop(node) {
  const task = [node]
  const list = []
  while (task.length) {
    const node = task.splice(0, 1)[0]
    if (!node) continue
    list.push(node.val)
    task.push(node.left)
    task.push(node.right)
  }
  return list
}

// 時間上看起來差不多，放後面的那個都會比較快
// 單獨執行的時候其實也差不多
// 可能會跟樹的大小有關吧

console.time('while-loop')
getNodeByWhileLoop(root)
console.timeEnd('while-loop')

console.time('recursive')
getNodeByRecursive(root)
console.timeEnd('recursive')
