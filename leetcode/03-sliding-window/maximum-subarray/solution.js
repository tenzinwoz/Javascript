/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let best = nums[0];
  let cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], cur + nums[i]);
    best = Math.max(best, cur);
  }
  return best;
}

const assert = require("assert");
assert.strictEqual(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
assert.strictEqual(maxSubArray([1]), 1);
assert.strictEqual(maxSubArray([5, 4, -1, 7, 8]), 23);
console.log("maximum-subarray: all examples pass");

module.exports = { maxSubArray };
