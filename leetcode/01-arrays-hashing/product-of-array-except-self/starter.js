/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const answers = new Array(nums.length).fill(1);

  let left = 1;
  let right = 1;

  // left side multiplication for element
  //  at the index is stored on the same index
  for (let i = 0; i < nums.length; i++) {
    answers[i] = left;
    left = left * nums[i];
  }

  // not multiple right side elements as well
  for (let j = nums.length - 1; j >= 0; j--) {
    answers[j] = answers[j] * right;
    right = nums[j] * right;
  }

  console.log(answers);
}

productExceptSelf([1, 2, 3, 4]);
