/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function groupAnagrams(strs) {
  const mapObject = new Map();

  for (let word of strs) {
    const sortedWord = word.split("").sort().join("");

    if (!mapObject.has(sortedWord)) {
      mapObject.set(sortedWord, [word]);
    } else {
      const existingWords = mapObject.get(sortedWord);
      mapObject.set(sortedWord, [...existingWords, word]);
    }
  }

  const finalArray = [];

  console.log(mapObject);

  for (let [key, values] of mapObject) {
    finalArray.push(values);
  }
  return finalArray;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
