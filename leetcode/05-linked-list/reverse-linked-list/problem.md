# Reverse Linked List

**Difficulty:** Easy  
**LeetCode:** [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

## Description

Given the `head` of a singly linked list, reverse the list and return the new head.

In this repo, a node is `{ val, next }` where `next` is another node or `null`.

## Examples

| List (as array view) | Reversed |
|----------------------|----------|
| `[1, 2, 3, 4, 5]` | `[5, 4, 3, 2, 1]` |
| `[1, 2]` | `[2, 1]` |
| `[]` | `[]` |

## Constraints

- `0 <= length <= 5000`
- `-5000 <= Node.val <= 5000`

## What you practice

- Iterative **three-pointer** (`prev`, `cur`, `next`) or recursive reversal.

## Hints

1. Iterative: `prev = null`, `cur = head`; while `cur`, save `next`, flip `cur.next`, advance.
2. Return `prev` as new head.

## Approach (after you try)

- Classic iterative reverse in O(n) time, O(1) space.

## Complexity

- **Time:** O(n)  
- **Space:** O(1) iterative
