// https://leetcode.com/problems/maximum-binary-tree/submissions/
const nums = [3, 2, 1, 6, 0, 5]

function input(nums) {
  const result = _findMax(nums)
  return result

  function _findMax(list) {
    if (list.length === 1) return new TreeNode(list[0])

    const bigest = list.slice().sort((a, b) => b - a)[0]

    let [left, right] = `${list.join(',')},`.split(`${bigest},`)
    ;[left, right] = [
      left
        .split(',')
        .filter(v => v)
        .map(v => +v),
      right
        .split(',')
        .filter(v => v)
        .map(v => +v)
    ]

    return new TreeNode(
      bigest,
      left.length > 1 ? _findMax(left) : isNaN(left[0]) ? null : new TreeNode(left[0]),
      right.length > 1 ? _findMax(right) : isNaN(right[0]) ? null : new TreeNode(right[0])
    )
  }

  function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const result = input(nums)
console.log(result)
