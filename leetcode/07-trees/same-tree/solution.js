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
 * @param {TreeNode|null} p
 * @param {TreeNode|null} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const assert = require("assert");
assert.strictEqual(
  isSameTree(treeFromLevel([1, 2, 3]), treeFromLevel([1, 2, 3])),
  true
);
assert.strictEqual(
  isSameTree(treeFromLevel([1, 2]), treeFromLevel([1, null, 2])),
  false
);
assert.strictEqual(
  isSameTree(treeFromLevel([1, 2, 1]), treeFromLevel([1, 1, 2])),
  false
);
console.log("same-tree: all examples pass");

module.exports = { isSameTree, treeFromLevel };
