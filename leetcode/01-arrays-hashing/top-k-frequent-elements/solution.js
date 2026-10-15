/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const freq = new Map();
  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);

  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, count] of freq) {
    buckets[count].push(num);
  }

  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    for (const num of buckets[i]) {
      result.push(num);
      if (result.length === k) return result;
    }
  }
  return result;
}

const assert = require("assert");
assert.deepStrictEqual(
  [...topKFrequent([1, 1, 1, 2, 2, 3], 2)].sort((a, b) => a - b),
  [1, 2]
);
assert.deepStrictEqual(topKFrequent([1], 1), [1]);
console.log("top-k-frequent-elements: all examples pass");

module.exports = { topKFrequent };
