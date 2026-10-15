/** Build tree from level-order array (null = missing child) */
function treeFromLevel(arr) {
  if (!arr.length || arr[0] === null) return null;
  const root = { val: arr[0], left: null, right: null };
  const q = [root];
  let i = 1;
  while (i < arr.length) {
    const node = q.shift();
    if (arr[i] != null) {
      node.left = { val: arr[i], left: null, right: null };
      q.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] != null) {
      node.right = { val: arr[i], left: null, right: null };
      q.push(node.right);
    }
    i++;
  }
  return root;
}

/**
 * @param {TreeNode|null} root
 * @return {number}
 */
function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

const assert = require("assert");
assert.strictEqual(maxDepth(treeFromLevel([3, 9, 20, null, null, 15, 7])), 3);
assert.strictEqual(maxDepth(treeFromLevel([1, null, 2])), 2);
assert.strictEqual(maxDepth(null), 0);
console.log("maximum-depth-binary-tree: all examples pass");

module.exports = { maxDepth, treeFromLevel };
