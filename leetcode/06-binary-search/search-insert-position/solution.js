/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) left = mid + 1;
    else right = mid;
  }
  return left;
}

const assert = require("assert");
assert.strictEqual(searchInsert([1, 3, 5, 6], 5), 2);
assert.strictEqual(searchInsert([1, 3, 5, 6], 2), 1);
assert.strictEqual(searchInsert([1, 3, 5, 6], 7), 4);
assert.strictEqual(searchInsert([1, 3, 5, 6], 0), 0);
console.log("search-insert-position: all examples pass");

module.exports = { searchInsert };
