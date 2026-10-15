const add = (a, b) => a + b;

const memoize = (fn) => {
  const resultMap = new Map();
  return (a, b) => {
    const key = JSON.stringify(`${a},${b}`);

    if (resultMap.has(key)) {
      return resultMap.get(key);
    }

    const res = fn(a + b);
    resultMap.set(key, res);

    return res;
  };
};
const memoizedAddFn = memoize(add);

const result = memoizedAddFn(1, 2);
const result2 = memoizedAddFn(2, 3);
const result3 = memoizedAddFn(1, 2);
