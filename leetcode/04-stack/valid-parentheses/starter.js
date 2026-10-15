/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(s) {
  const openingArray = [];
  const openingBrackets = ["{", "[", "("];
  for (let i = 0; i < s.length; i++) {
    if (openingBrackets.includes(s[i])) {
      openingArray.push(s[i]);
    } else {
      const lastOpeningString = openingArray[openingArray.length - 1];
      if (s[i] === "}" && lastOpeningString === "{") {
        openingArray.pop();
      }
      if (s[i] === "]" && lastOpeningString === "[") {
        openingArray.pop();
      }
      if (s[i] === ")" && lastOpeningString === "(") {
        openingArray.pop();
      }
    }
  }
  console.log(openingArray, "op");
  return !!openingArray.length;
}

console.log(isValid("()[]{}"));
