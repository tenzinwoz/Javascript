// Simple: Brute Force
const findTwoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sumOfNums = nums[i] + nums[j];
      if (sumOfNums === target) {
        return { i, j };
      }
    }
  }
};

// Optimized: using map
const findTwoSumUsingMap = (nums, target) => {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];

    if (numMap.has(compliment)) {
      return { i, j: numMap.get(compliment) };
    } else {
      numMap.set(nums[i], i);
    }
  }
};

console.log(findTwoSum([11, 15, 2, 7], 9));
console.log(findTwoSumUsingMap([11, 15, 2, 7], 9));
