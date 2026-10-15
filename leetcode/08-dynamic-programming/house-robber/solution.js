/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  let prev2 = 0;
  let prev1 = 0;
  for (const x of nums) {
    const cur = Math.max(prev1, x + prev2);
    prev2 = prev1;
    prev1 = cur;
  }
  return prev1;
}

const assert = require("assert");
assert.strictEqual(rob([1, 2, 3, 1]), 4);
assert.strictEqual(rob([2, 7, 9, 3, 1]), 12);
assert.strictEqual(rob([5]), 5);
console.log("house-robber: all examples pass");

module.exports = { rob };
