function treeFromLevel(arr) {
  if (!arr.length || arr[0] === null) return null;
  const root = { val: arr[0], left: null, right: null };
  const queue = [root];
  let i = 1;
  while (i < arr.length) {
    const node = queue.shift();
    if (arr[i] != null) {
      node.left = { val: arr[i], left: null, right: null };
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] != null) {
      node.right = { val: arr[i], left: null, right: null };
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

/**
 * @param {TreeNode|null} root
 * @return {number[][]}
 */
function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {
    const size = queue.length;
    const level = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }

  return result;
}

const assert = require("assert");
assert.deepStrictEqual(levelOrder(treeFromLevel([3, 9, 20, null, null, 15, 7])), [
  [3],
  [9, 20],
  [15, 7],
]);
assert.deepStrictEqual(levelOrder(treeFromLevel([1])), [[1]]);
assert.deepStrictEqual(levelOrder(null), []);
console.log("binary-tree-level-order-traversal: all examples pass");

module.exports = { levelOrder, treeFromLevel };
