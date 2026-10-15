/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  // since its sorted this condition has to be true
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    //Check which side is sorted

    if (nums[left] <= nums[mid]) {
      //Left side is sorted
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // right side sorted

      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = left + 1;
      }
    }
  }

  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
