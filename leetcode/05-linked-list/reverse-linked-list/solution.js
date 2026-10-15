function toArray(head) {
  const out = [];
  for (let n = head; n; n = n.next) out.push(n.val);
  return out;
}

function fromArray(arr) {
  if (arr.length === 0) return null;
  const head = { val: arr[0], next: null };
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = { val: arr[i], next: null };
    cur = cur.next;
  }
  return head;
}

/**
 * @param {ListNode|null} head
 * @return {ListNode|null}
 */
function reverseList(head) {
  let prev = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}

const assert = require("assert");
assert.deepStrictEqual(toArray(reverseList(fromArray([1, 2, 3, 4, 5]))), [
  5, 4, 3, 2, 1,
]);
assert.deepStrictEqual(toArray(reverseList(fromArray([1, 2]))), [2, 1]);
assert.strictEqual(reverseList(null), null);
console.log("reverse-linked-list: all examples pass");

module.exports = { reverseList, fromArray, toArray };
