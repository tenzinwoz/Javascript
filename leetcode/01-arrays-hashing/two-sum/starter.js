/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const remaining = target - nums[i];
    if (hashMap.has(remaining)) {
      return [hashMap.get(remaining), i];
    } else {
      hashMap.set(nums[i], i);
    }
  }

  return [];
}

// --- simple checks (uncomment when ready) ---
const assert = require("assert");
assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
assert.deepStrictEqual(twoSum([3, 2, 4], 6), [1, 2]);
console.log("ok");

module.exports = { twoSum };
