/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const repeatedMap = new Map();

  for (let value of nums) {
    if (!repeatedMap.has(value)) {
      repeatedMap.set(value, 1);
    } else {
      const currentValueCount = repeatedMap.get(value);
      repeatedMap.set(value, currentValueCount + 1);
    }
  }

  const repeatedNums = [];
  for (let [key, value] of repeatedMap) {
    if (value >= k) {
      repeatedNums.push(key);
    }
  }
  console.log(repeatedNums);
  return repeatedNums;
}
topKFrequent([1, 1, 1, 2, 2, 3], 2);
