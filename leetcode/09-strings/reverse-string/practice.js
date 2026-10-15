// Simplest
const reverseString = (str) => {
  if (!str) {
    return;
  }
  const strArray = str.split("");
  const reversedStrArray = strArray.reverse();
  const reversedStr = reversedStrArray.join("");

  console.log(reversedStr);
  return reversedStr;
};

// Using loop
const reverseStringUsingLoop = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
  }
  console.log(reversedStr);
  return reversedStr;
};

// Using recursion
const reverseStringUsingRecursion = (str) => {
  // Base case
  if (str === "") {
    return "";
  }
  // Recursive case
  return reverseStringUsingRecursion(str.substring(1)) + str[0];

  // Logic of execution:
  // reverseStringUsingRecursion("hello")
  // reverseStringUsingRecursion("ello") + "h"
  // reverseStringUsingRecursion("llo") + "e" + "h"
  // reverseStringUsingRecursion("lo") + "l" + "e" + "h"
  // reverseStringUsingRecursion("o") + "l" + "l" + "e" + "h"
  // reverseStringUsingRecursion("") + "o" + "l" + "l" + "e" + "h"
  // "" + "o" + "l" + "l" + "e" + "h"
  // Final output: "olleh"
};

reverseString("hello");
// reverseStringUsingLoop("hello");
// reverseStringUsingRecursion("hello");
