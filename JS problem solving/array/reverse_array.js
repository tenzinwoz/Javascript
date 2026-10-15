const reverseArray = (arr) => {
  // Mutates the array
  //   const reversedArray = arr.reverse();

  // toReveresed() doesnt mutate the original arr
  const nonMutatedRevserdArray = arr.toReversed();
  return nonMutatedRevserdArray;
};

//Using Loop and two Pointer
const reverseWithLoopAndPointer = (arr) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }

  return arr;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseWithLoopAndPointer([1, 2, 3, 4, 5]));
