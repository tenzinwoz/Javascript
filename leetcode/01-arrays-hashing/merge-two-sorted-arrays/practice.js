const mergeArray = (arr1, arr2) => {
  const mergeArray = [];
  let i = 0;
  let j = 0;

  // Compare the smallest unmerged values and append the smaller one.
  // Then append any remaining values after either array is exhausted.
  // This loops keeps adding ele
  // unless one array is empty
  // and next non empty array will be taken care by following while loops
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergeArray.push(arr1[i]);
      i++;
    } else {
      mergeArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergeArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergeArray.push(arr2[j]);
    j++;
  }
  return mergeArray;
};

console.log(mergeArray([1, 5, 7, 10], [2, 3, 8, 10, 12]));
