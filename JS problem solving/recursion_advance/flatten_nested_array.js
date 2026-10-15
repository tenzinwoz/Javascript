const main = (arr, result = []) => {
  // // Easy method / Built in
  // return arr.flat();

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      main(item, result);
    } else {
      result.push(item);
    }
  });
  return result;
};

const user = [0, [1, 2], [3, [4, 5]]];

user.flat();

console.log(main(user));
main(user);

