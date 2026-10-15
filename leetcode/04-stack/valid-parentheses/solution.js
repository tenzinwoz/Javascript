/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  const pair = { ")": "(", "}": "{", "]": "[" };
  for (const c of s) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      if (stack.length === 0 || stack.pop() !== pair[c]) return false;
    }
  }
  return stack.length === 0;
}

const assert = require("assert");
assert.strictEqual(isValid("()"), true);
assert.strictEqual(isValid("()[]{}"), true);
assert.strictEqual(isValid("(]"), false);
assert.strictEqual(isValid("([)]"), false);
assert.strictEqual(isValid("{[]}"), true);
console.log("valid-parentheses: all examples pass");

module.exports = { isValid };
