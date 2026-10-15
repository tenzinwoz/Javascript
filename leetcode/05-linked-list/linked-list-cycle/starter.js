/**
 * @param {ListNode|null} head
 * @return {boolean}
 */

const createLinkedList = (elements, pos) => {
  const nodes = elements.map((ele) => {
    return {
      value: ele,
      next: null,
    };
  });

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  if (pos >= 0) {
    nodes[nodes.length - 1].next = nodes[pos];
  }
  return nodes[0];
};

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    // A cycle is detected when both pointers refer to the same object
    // instance. In JavaScript, an object variable holds a reference to the
    // object (similar to an address, but not directly accessible), so strict
    // equality is true only when both references point to the same object.
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

hasCycle(createLinkedList([3, 2, 0, -4], 1));
