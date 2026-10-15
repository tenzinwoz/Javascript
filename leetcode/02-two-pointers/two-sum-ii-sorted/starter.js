/**
 * @param {number[]} numbers — sorted ascending (1-indexed in problem statement)
 * @param {number} target
 * @return {number[]} — 1-indexed [i, j]
 */

function twoSum(numbers, target) {
  const hashMap = new Map();

  for (let [index, num] of numbers.entries()) {
    const numNeeded = target - num;
    if (!hashMap.has(numNeeded)) {
      hashMap.set(num, index);
    } else {
      const storedNumIndex = hashMap.get(numNeeded);
      return [numbers[storedNumIndex], num];
    }
  }

  // let leftIndex = 1;
  // let rightIndex = numbers.length;

  // console.log("Running");

  // // untill condition is met keep the loop going
  // while (leftIndex !== rightIndex) {
  //   if (numbers[leftIndex - 1] + numbers[rightIndex - 1] === target) {
  //     return [leftIndex, rightIndex];
  //   }

  //   // If sum is less increase left
  //   if (numbers[leftIndex - 1] + numbers[rightIndex - 1] < target) {
  //     leftIndex++;
  //   } else {
  //     rightIndex--;
  //   }
  //   // If sum is more decrease right
  // }
  // return [];
}

console.log(twoSum([1, 2, 3, 4, 5], 5));

module.exports = { twoSum };
