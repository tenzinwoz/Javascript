/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

const assert = require("assert");
assert.strictEqual(search([-1, 0, 3, 5, 9, 12], 9), 4);
assert.strictEqual(search([-1, 0, 3, 5, 9, 12], 2), -1);
console.log("binary-search: all examples pass");

module.exports = { search };
