// Simplest
/**
 * Finds the longest common prefix string amongst an array of strings.
 * 
 * The function takes the first string as a reference and compares each character
 * with the corresponding character at the same position in all other strings.
 * When a mismatch is found, it returns the common prefix up to that point.
 * If no mismatches are found, the entire first string is the common prefix.
 * 
 * @param {string[]} strArray - An array of strings to find the common prefix from
 * @returns {string} The longest common prefix string. Returns empty string if no common prefix exists.
 * 
 * @example
 * // Returns "fl"
 * longestCommonPrefix(["flower", "flow", "flight"]);
 * 
 * @example
 * // Returns ""
 * longestCommonPrefix(["dog", "racecar", "car"]);
 * 
 * @example
 * // Returns "test"
 * longestCommonPrefix(["test", "testing", "tester"]);
 */
const longestCommonPrefix = (strArray) => {
  // Take first string and compare with rest of string in array
  const firstString = strArray[0];

  for (let i = 0; i < firstString.length; i++) {
    const char = firstString[i];

    //Start from second word in the array
    for (let j = 1; j < strArray.length; j++) {
      const letter = strArray[j][i];

      if (char !== letter) {
        return firstString.substring(0, i);
      }
    }
  }

  return firstString;
};

console.log(longestCommonPrefix(["flower", "flight", "flow"]));
