/**
 * @param {number[]} nums — sorted ascending, distinct
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      return mid;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // return left cuz as soon as the loop ends, left will be the correct insert position
  return left;
}

console.log(searchInsert([1, 3, 5, 6], 2));
