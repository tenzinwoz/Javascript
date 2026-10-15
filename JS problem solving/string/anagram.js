// Simpler : using sort
const anagramUsingSort = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
};

// Using Map: decremental key count
const anagramUsingMap = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const charMap = new Map();

  for (let char of str1) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  for (let char of str2) {
    // if str2 char is not in charMap
    if (!charMap.has(char)) {
      return false;
    }

    if (charMap.has(char) && charMap.get(char) === 0) {
      return false;
    }
    // Decrement the value
    charMap.set(char, charMap.get(char) - 1);
  }

  return true;
};
// console.log(anagramUsingSort("silent", "listen"));
console.log(anagramUsingMap("silent", "listen"));
