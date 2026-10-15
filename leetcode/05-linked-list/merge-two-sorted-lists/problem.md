# Merge Two Sorted Lists

**Difficulty:** Easy  
**LeetCode:** [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

## Description

Merge two **sorted** linked lists (ascending by `val`) into one sorted list. Return the head of the merged list.

Nodes: `{ val, next }`.

## Examples

| list1 | list2 | merged |
|--------|--------|--------|
| `[1, 2, 4]` | `[1, 3, 4]` | `[1, 1, 2, 3, 4, 4]` |
| `[]` | `[]` | `[]` |
| `[]` | `[0]` | `[0]` |

## Constraints

- `0 <= lengths <= 50`
- `-100 <= Node.val <= 100`
- Both lists sorted non-decreasing.

## What you practice

- **Dummy head** + tail pointer; compare `list1` vs `list2`.

## Hints

1. `dummy = { val: 0, next: null }`, `tail = dummy`.
2. When one list ends, attach the remainder of the other.

## Approach (after you try)

- Linear merge O(n + m), O(1) extra if reusing nodes.

## Complexity

- **Time:** O(n + m)  
- **Space:** O(1)
