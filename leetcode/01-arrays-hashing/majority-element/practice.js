const findMajorityElement = (nums) => {
  const majorityCount = Math.round(nums.length / 2);

  const numMap = new Map();

  for (let ele of nums) {
    if (numMap.has(ele)) {
      const countToSet = numMap.get(ele) + 1;

      // Return early if the value is found
      if (countToSet >= majorityCount) {
        return ele;
      }

      numMap.set(ele, countToSet);
    } else {
      numMap.set(ele, 1);
    }
  }
};

console.log(findMajorityElement([6, 6, 7, 1, 1, 1, 1]));
