# Linked List

**Pointer surgery:** `next` rewiring, **dummy head** to simplify inserts at head, careful with **cycles** (Floyd) when asked.

**Signals:** “reverse,” “merge,” “cycle,” “middle node.”

**Pitfalls:** Losing reference to `next` before reassigning; forgetting to return `dummy.next` after using dummy head.

## Problems

- `reverse-linked-list`, `merge-two-sorted-lists`, `linked-list-cycle`