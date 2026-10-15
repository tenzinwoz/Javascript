/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  let left = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= right;
    right *= nums[i];
  }

  return answer;
}

const assert = require("assert");

function normalizeZeros(arr) {
  return arr.map((n) => (Object.is(n, -0) ? 0 : n));
}

assert.deepStrictEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
assert.deepStrictEqual(
  normalizeZeros(productExceptSelf([-1, 1, 0, -3, 3])),
  [0, 0, 9, 0, 0]
);
console.log("product-of-array-except-self: all examples pass");

module.exports = { productExceptSelf };
