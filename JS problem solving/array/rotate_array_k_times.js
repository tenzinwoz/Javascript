//Simple:
// push: push to the end of array
// pop: remove from the end of array
// shift: remove from top of array
// unshif: add to the top of array
const rotateKTimes = (arr, k) => {
  // To optimize the rotation
  let timesToRotate = k;
  if (k > arr.length) {
    timesToRotate = k - arr.length;
  }

  for (let i = 0; i < timesToRotate; i++) {
    const elementToMove = arr.shift();
    arr.push(elementToMove);
  }
  return arr;
};

const exampleArray = [1, 2, 3, 4, 5];
console.log(rotateKTimes(exampleArray, 6));
