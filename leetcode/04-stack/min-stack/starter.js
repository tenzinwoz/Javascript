// Basic idea is to keep two stack (Array)
// whenever you remoge item from main stack
// we have to remove it from the other stack to keep the min in track
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /** @param {number} val */
  push(val) {
    if (!this.stack.length) {
      this.stack.push(val);
      this.minStack.push(val);
    } else {
      this.stack.push(val);
      this.minStack.push(
        Math.min(this.minStack[this.minStack.length - 1], val),
      );
    }
  }

  pop() {
    if (!this.stack.length) {
      return null;
    } else {
      this.minStack.pop();
      return this.stack.pop();
    }
  }

  /** @return {number} */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /** @return {number} */
  getMin() {
    return this.minStack[this.minStack.length - 1];
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
