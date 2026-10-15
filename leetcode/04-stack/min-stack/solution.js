class MinStack {
  constructor() {
    this.stack = [];
    this.mins = [];
  }

  /** @param {number} val */
  push(val) {
    this.stack.push(val);
    if (this.mins.length === 0) this.mins.push(val);
    else this.mins.push(Math.min(val, this.mins[this.mins.length - 1]));
  }

  pop() {
    this.stack.pop();
    this.mins.pop();
  }

  /** @return {number} */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /** @return {number} */
  getMin() {
    return this.mins[this.mins.length - 1];
  }
}

const assert = require("assert");
const s = new MinStack();
s.push(-2);
s.push(0);
s.push(-3);
assert.strictEqual(s.getMin(), -3);
s.pop();
assert.strictEqual(s.top(), 0);
assert.strictEqual(s.getMin(), -2);
console.log("min-stack: example sequence passes");

module.exports = { MinStack };
