/**
 * Finds the first non-repeating character in a string.
 *
 * This function iterates through the string to count the frequency of each character,
 * then finds and returns the first character that appears exactly once.
 *
 * @param {string} str - The input string to analyze
 * @returns {string|undefined} The first non-repeating character, or undefined if all characters repeat
 *
 * @example
 * // Returns 'b'
 * main("abccba");
 *
 * @example
 * // Returns 'h'
 * main("hello");
 *
 * @example
 * // Returns undefined
 * main("aabb");
 */

// One big learning is that Map retains insertion order.
function main(str) {
  const charCount = new Map();
  for (let char of str) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  for (let [key, value] of charCount) {
    if (value === 1) {
      return key;
    }
  }
}

console.log(main("loveleetcode"));
