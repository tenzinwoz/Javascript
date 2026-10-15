const array = [1, 3, 5, 7, 9];
const k = 2;

const findMaxMinSum = (array, k) => {
  let maxSumArr = [...array];
  let minSumArr = [...array];

  // Loop k times (drop element k times)
  for (let i = 0; i < k; i++) {
    // You track the index because you need to delete one specific slot in the array,
    //  not “every place that has this number.”

    let minIndex = 0;
    let maxIndex = 0;

    maxSumArr.forEach((item, index) => {
      if (item < maxSumArr[minIndex]) {
        minIndex = index;
      }
    });

    minSumArr.forEach((item, index) => {
      if (item > minSumArr[maxIndex]) {
        maxIndex = index;
      }
    });

    maxSumArr = maxSumArr.filter((item, index) => index != minIndex);
    minSumArr = minSumArr.filter((item, index) => index != maxIndex);
  }

  const maxSum = maxSumArr.reduce((acc, item) => {
    return acc + item;
  });

  const minSum = minSumArr.reduce((acc, item) => {
    return acc + item;
  });

  return [maxSum, minSum];
};

console.log(findMaxMinSum(array, k));
