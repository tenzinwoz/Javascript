// Simple: using loop
const findIntersection = (arr1, arr2) => {
  const commonEleArray = [];
  arr1.forEach((arr1Ele) => {
    arr2.forEach((arr2Ele) => {
      if (arr1Ele === arr2Ele && !commonEleArray.includes(arr1Ele)) {
        commonEleArray.push(arr1Ele);
      }
    });
  });

  return commonEleArray;
};

// Using set: performance improvement with set.has()
const findIntersectionUsingSet = (arr1, arr2) => {
  const uniqueArr1 = new Set(arr1);
  const uniqueArr2 = [...new Set(arr2)];

  return uniqueArr2.filter((arr2Ele) => uniqueArr1.has(arr2Ele));
};

console.log(findIntersection([1, 2, 2, 4, 5], [2, 5, 2, 8, 9]));
console.log(findIntersectionUsingSet([1, 2, 2, 4, 5], [2, 5, 2, 8, 9]));
