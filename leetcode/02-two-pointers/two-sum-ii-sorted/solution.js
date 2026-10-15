/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum < target) left++;
    else right--;
  }
  return [];
}

const assert = require("assert");
assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [1, 2]);
assert.deepStrictEqual(twoSum([2, 3, 4], 6), [1, 3]);
assert.deepStrictEqual(twoSum([-1, 0], -1), [1, 2]);
console.log("two-sum-ii-sorted: all examples pass");

module.exports = { twoSum };
