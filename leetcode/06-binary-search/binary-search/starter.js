/**
 * @param {number[]} nums — sorted ascending
 * @param {number} target
 * @return {number}
 */

//Basic concept is divide and conquer
const binarysearch = (nums, target, start = 0, end = nums.length - 1) => {
  // search always has to happen bw the indexes (Gaps)
  if (start > end) {
    return -1;
  }

  const middle = Math.floor((start + end) / 2);

  if (nums[middle] === target) {
    return middle;
  }

  if (nums[middle] > target) {
    return binarysearch(nums, target, start, middle - 1);
  }

  return binarysearch(nums, target, middle + 1, end);
};

console.log(binarysearch([-1, 0, 3, 5, 9, 12], 9));
