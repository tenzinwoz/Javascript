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
 * @param {ListNode|null} list1
 * @param {ListNode|null} list2
 * @return {ListNode|null}
 */
function mergeTwoLists(list1, list2) {
  const dummy = { val: 0, next: null };
  let tail = dummy;
  let a = list1;
  let b = list2;
  while (a && b) {
    if (a.val <= b.val) {
      tail.next = a;
      a = a.next;
    } else {
      tail.next = b;
      b = b.next;
    }
    tail = tail.next;
  }
  tail.next = a || b;
  return dummy.next;
}

const assert = require("assert");
assert.deepStrictEqual(
  toArray(mergeTwoLists(fromArray([1, 2, 4]), fromArray([1, 3, 4]))),
  [1, 1, 2, 3, 4, 4]
);
assert.strictEqual(mergeTwoLists(null, null), null);
assert.deepStrictEqual(toArray(mergeTwoLists(null, fromArray([0]))), [0]);
console.log("merge-two-sorted-lists: all examples pass");

module.exports = { mergeTwoLists, fromArray, toArray };
