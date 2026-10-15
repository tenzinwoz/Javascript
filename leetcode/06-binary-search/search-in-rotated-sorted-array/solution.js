/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] === target) return mid;

    if (nums[lo] <= nums[mid]) {
      // left half sorted
      if (nums[lo] <= target && target < nums[mid]) hi = mid - 1;
      else lo = mid + 1;
    } else {
      // right half sorted
      if (nums[mid] < target && target <= nums[hi]) lo = mid + 1;
      else hi = mid - 1;
    }
  }

  return -1;
}

const assert = require("assert");
assert.strictEqual(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
assert.strictEqual(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
assert.strictEqual(search([1], 0), -1);
assert.strictEqual(search([1], 1), 0);
console.log("search-in-rotated-sorted-array: all examples pass");

module.exports = { search };
