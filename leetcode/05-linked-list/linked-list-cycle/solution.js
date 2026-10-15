function fromArrayWithCycle(arr, pos) {
  if (!arr.length) return null;
  const nodes = arr.map((val) => ({ val, next: null }));
  for (let i = 0; i < nodes.length - 1; i++) nodes[i].next = nodes[i + 1];
  if (pos >= 0) nodes[nodes.length - 1].next = nodes[pos];
  return nodes[0];
}

/**
 * @param {ListNode|null} head
 * @return {boolean}
 */
function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

const assert = require("assert");
assert.strictEqual(hasCycle(fromArrayWithCycle([3, 2, 0, -4], 1)), true);
assert.strictEqual(hasCycle(fromArrayWithCycle([1, 2], 0)), true);
assert.strictEqual(hasCycle(fromArrayWithCycle([1], -1)), false);
assert.strictEqual(hasCycle(null), false);
console.log("linked-list-cycle: all examples pass");

module.exports = { hasCycle, fromArrayWithCycle };
