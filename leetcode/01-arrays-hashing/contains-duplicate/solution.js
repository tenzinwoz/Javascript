/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const seen = new Set();
  for (const x of nums) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
}

const assert = require("assert");
assert.strictEqual(containsDuplicate([1, 2, 3, 1]), true);
assert.strictEqual(containsDuplicate([1, 2, 3, 4]), false);
assert.strictEqual(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2]), true);
console.log("contains-duplicate: all examples pass");

module.exports = { containsDuplicate };
