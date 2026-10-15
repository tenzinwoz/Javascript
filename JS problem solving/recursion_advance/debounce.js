const debounce = (fn, delay) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(args);
    }, delay);
  };
};

const fetchData = (type) => {
  console.log(`Fetching ${type}`);
};

const debouncedFetch = debounce(fetchData, 2000);

console.log(debouncedFetch("post"));
console.log(debouncedFetch("user"));
console.log(debouncedFetch("profile"));
