// Using Object
(function (str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const charCount = {};

  for (let char of cleanStr) {
    if (charCount[char]) {
      charCount[char] = charCount[char] + 1;
    } else {
      charCount[char] = 1;
    }
  }
  console.log(charCount);
})("Tenzin");

// Using Map
(function (str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const charCount = new Map();

  for (let char of cleanStr) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }
  console.log(charCount);
})("Tenzin");
