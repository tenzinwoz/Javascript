function isAlphaNum(c) {
  const code = c.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  );
}

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (left < right && !isAlphaNum(s[left])) left++;
    while (left < right && !isAlphaNum(s[right])) right--;
    const a = s[left].toLowerCase();
    const b = s[right].toLowerCase();
    if (a !== b) return false;
    left++;
    right--;
  }
  return true;
}

const assert = require("assert");
assert.strictEqual(isPalindrome("A man, a plan, a canal: Panama"), true);
assert.strictEqual(isPalindrome("race a car"), false);
assert.strictEqual(isPalindrome(" "), true);
console.log("valid-palindrome: all examples pass");

module.exports = { isPalindrome };
