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

function treeToLevel(root) {
  if (!root) return [];
  const out = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (!node) {
      out.push(null);
      continue;
    }
    out.push(node.val);
    queue.push(node.left);
    queue.push(node.right);
  }
  while (out.length && out[out.length - 1] === null) out.pop();
  return out;
}

/**
 * @param {TreeNode|null} root
 * @return {TreeNode|null}
 */
function invertTree(root) {
  if (!root) return null;
  const tmp = root.left;
  root.left = root.right;
  root.right = tmp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}

const assert = require("assert");
assert.deepStrictEqual(
  treeToLevel(invertTree(treeFromLevel([4, 2, 7, 1, 3, 6, 9]))),
  [4, 7, 2, 9, 6, 3, 1]
);
assert.deepStrictEqual(
  treeToLevel(invertTree(treeFromLevel([2, 1, 3]))),
  [2, 3, 1]
);
assert.deepStrictEqual(treeToLevel(invertTree(null)), []);
console.log("invert-binary-tree: all examples pass");

module.exports = { invertTree, treeFromLevel, treeToLevel };
