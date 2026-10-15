/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let minSoFar = Infinity;
  let best = 0;
  for (const p of prices) {
    best = Math.max(best, p - minSoFar);
    minSoFar = Math.min(minSoFar, p);
  }
  return best;
}

const assert = require("assert");
assert.strictEqual(maxProfit([7, 1, 5, 3, 6, 4]), 5);
assert.strictEqual(maxProfit([7, 6, 4, 3, 1]), 0);
console.log("best-time-to-buy-sell-stock: all examples pass");

module.exports = { maxProfit };
