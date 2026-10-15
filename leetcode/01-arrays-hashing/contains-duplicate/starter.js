/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  // set is a collection of unique values
  const numSet = new Set();

  for (const number of nums) {
    if (numSet.has(number)) {
      return true;
    } else {
      numSet.add(number);
    }
  }
  return false;
}

module.exports = { containsDuplicate };
