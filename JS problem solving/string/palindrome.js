/**
 * Cleans a string by converting it to lowercase and removing all non-alphanumeric characters
 * @param {string} str - The input string to be cleaned
 * @returns {string} The cleaned string containing only lowercase letters and numbers
 */
const cleanString = (str) => {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
};
// Simplest
const checkPalindrome = (str) => {
  str = cleanString(str);
  const stringArray = str.split("");
  const reversedStringArray = stringArray.reverse();
  const reversedString = reversedStringArray.join("");

  console.log(reversedString === str);
  return reversedString === str;
};

// Loop
const checkPalindromeUsingLoop = (str) => {
  str = cleanString(str);

  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
  }

  console.log(reversedStr === str);
  return reversedStr === str;
};

checkPalindrome("No lemon, no melon");
checkPalindromeUsingLoop("tenzin");
