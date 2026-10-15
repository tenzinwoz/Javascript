// Using Sort
function findMaxMin(arr) {
  const sortedArray = arr.sort();
  const max = sortedArray[arr.length - 1];
  const min = sortedArray[0];
  return { max, min };
}

//Using Math
function findMaxMinUsingMath(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return { max, min };
}

console.log(findMaxMin([0, 1, 2, 3, 4, 5, 6]));
console.log(findMaxMinUsingMath([0, 1, 2, 3, 4, 5, 6]));
