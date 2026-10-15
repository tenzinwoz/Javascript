// Two pointer
// Sliding window
const longestSubstring = (str) => {
  let maxLength = 0;
  let left = 0;
  let right = 0;

  const charSet = new Set();

  while (right < str.length) {
    const letter = str[right];

    if (!charSet.has(letter)) {
      charSet.add(letter);
      console.log(charSet);
      maxLength = Math.max(charSet.size, maxLength);
      right++;
    } else {
      charSet.delete(str[left]);
      left++;
    }
  }

  return maxLength;
};

console.log(longestSubstring("abcabcbb"));
