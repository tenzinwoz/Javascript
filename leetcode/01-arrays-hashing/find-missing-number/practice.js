// Function to find the missing number in a sorted array
// Assumes the array contains consecutive numbers with one missing
const findTheMissingNo = (arr) => {
  let leftIndex = 0;

  // Iterate through the array comparing each element with the next
  while (leftIndex < arr.length - 1) {
    // Calculate what the next number should be
    const expectedNo = arr[leftIndex] + 1;

    // If the next element doesn't match the expected number, we found the gap
    if (expectedNo !== arr[leftIndex + 1]) {
      return expectedNo;
    }
    leftIndex++;
  }
};

// Test case: finds 5 in the sequence [1, 2, 3, 4, 6]
console.log(findTheMissingNo([1, 2, 3, 4, 6]));
