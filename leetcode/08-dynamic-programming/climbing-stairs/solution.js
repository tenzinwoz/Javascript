/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1;
  let b = 2;
  for (let i = 3; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

const assert = require("assert");
assert.strictEqual(climbStairs(2), 2);
assert.strictEqual(climbStairs(3), 3);
assert.strictEqual(climbStairs(4), 5);
assert.strictEqual(climbStairs(1), 1);
console.log("climbing-stairs: all examples pass");

module.exports = { climbStairs };
