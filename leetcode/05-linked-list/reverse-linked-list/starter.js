/**
 * Definition: node = { val: number, next: ListNode | null }
 * @param {ListNode|null} head
 * @return {ListNode|null}
 */
function reverseList(head) {
  let prev = null;
  let curr = head;

  //four steps to remember.
  //execute on each node

  while (curr) {
    // temp
    let next = curr.next;
    //rever the next pointer
    curr.next = prev;
    // for next node set the curr as prev
    prev = curr;
    // for next node next node is the curr
    curr = next;
  }

  // return the first node now
  return prev;
}

module.exports = { reverseList };
