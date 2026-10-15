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
 * @return {boolean}
 */
function isValidBST(root) {
  function dfs(node, low, high) {
    if (!node) return true;
    if (node.val <= low || node.val >= high) return false;
    return dfs(node.left, low, node.val) && dfs(node.right, node.val, high);
  }
  return dfs(root, -Infinity, Infinity);
}

const assert = require("assert");
assert.strictEqual(isValidBST(treeFromLevel([2, 1, 3])), true);
assert.strictEqual(isValidBST(treeFromLevel([5, 1, 4, null, null, 3, 6])), false);
assert.strictEqual(isValidBST(treeFromLevel([5, 4, 6, null, null, 3, 7])), false);
console.log("validate-binary-search-tree: all examples pass");

module.exports = { isValidBST, treeFromLevel };
