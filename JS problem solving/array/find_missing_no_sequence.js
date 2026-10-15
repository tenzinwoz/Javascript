const findTheMissingNo = (arr) => {
  let leftIndex = 0;

  while (leftIndex < arr.length - 1) {
    const expectedNo = arr[leftIndex] + 1;

    if (expectedNo !== arr[leftIndex + 1]) {
      return expectedNo;
    }
    leftIndex++;
  }
};

console.log(findTheMissingNo([1, 2, 3, 4, 6]));
