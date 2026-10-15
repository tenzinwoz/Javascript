/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  // Clean the string
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let leftIndex = 0;
  let rightIndex = s.length - 1;

  while (leftIndex < rightIndex) {
    if (s[leftIndex] !== s[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));

module.exports = { isPalindrome };
