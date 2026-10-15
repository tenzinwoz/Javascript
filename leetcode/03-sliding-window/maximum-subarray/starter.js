/**
 * @param {number[]} nums
 * @return {number}
 */

// Plain idea (Kadane):
// You're walking the array and asking: "Is it better to keep adding to my running total,
// or to ditch the old chunk and start fresh at this number?" Pick whichever is bigger.
// Your answer is the biggest running total you ever saw along the way.

function maxSubArray(nums) {
  let currentSum = 0;
  let maxSum = 0;

  let currentIndex = 0;

  for (let num of nums) {
    currentSum = Math.max(num, currentSum + num);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
module.exports = { maxSubArray };
