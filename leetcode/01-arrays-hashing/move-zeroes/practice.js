// Simple filter method
const moveZerosUsingFilter = (arr) => {
  const nonZeroArray = arr.filter((num) => num !== 0);
  const zeroArray = arr.filter((num) => num === 0);
  return nonZeroArray.concat(zeroArray);
};

// Using loop and splice
const moveZeros = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      // splice: mutates original array, returns removed elements
      // slice: does NOT mutate, returns new subarray
      const sliceArray = arr.splice(i, 1);
      arr = arr.concat(sliceArray);
    }
  }

  return arr;
};

// Using two pointer
const moveZerosOptimized = (arr) => {
  let left = 0;
  let right = 0;

  while (right < arr.length) {
    if (arr[right] !== 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
    }
    right++;
  }
  return arr;
};

const exampleArray = [2, 0, 0, 1, 0];
console.log(moveZerosUsingFilter(exampleArray));
console.log(moveZeros(exampleArray));
console.log(moveZerosOptimized(exampleArray));
