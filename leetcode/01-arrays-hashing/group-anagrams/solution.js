/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const map = new Map();
  for (const s of strs) {
    const key = s.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s);
  }
  return [...map.values()];
}

const assert = require("assert");

function normalize(groups) {
  return groups
    .map((g) => [...g].sort())
    .sort((a, b) => a[0].localeCompare(b[0]));
}

assert.deepStrictEqual(
  normalize(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])),
  normalize([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]])
);
assert.deepStrictEqual(groupAnagrams([""]), [[""]]);
assert.deepStrictEqual(groupAnagrams(["a"]), [["a"]]);
console.log("group-anagrams: all examples pass");

module.exports = { groupAnagrams };
