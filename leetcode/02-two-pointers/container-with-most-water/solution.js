/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let best = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    best = Math.max(best, area);
    if (height[left] < height[right]) left++;
    else right--;
  }

  return best;
}

const assert = require("assert");
assert.strictEqual(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
assert.strictEqual(maxArea([1, 1]), 1);
console.log("container-with-most-water: all examples pass");

module.exports = { maxArea };
