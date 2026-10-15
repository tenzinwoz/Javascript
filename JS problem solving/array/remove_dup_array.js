// Loop
const removeDubplicate = (arr) => {
  const cleanArray = [];

  arr.forEach((element) => {
    if (!cleanArray.includes(element)) {
      cleanArray.push(element);
    }
  });

  return cleanArray;
};

// Using set
const removeDubplicateUsingSet = (arr) => {
  return new Set(arr);
};

console.log(removeDubplicate([1, 2, 3, 1, 4, 5, 6, 4, 5]));
console.log(removeDubplicateUsingSet([1, 2, 3, 1, 4, 5, 6, 4, 5]));
