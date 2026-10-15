# Linked List Cycle

**Difficulty:** Easy  
**LeetCode:** [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)

## Description

Given `head`, the head of a linked list, determine if the linked list has a **cycle**.

A cycle means some node can be reached again by continuously following `next`. Return `true` if there is a cycle, otherwise `false`.

## Examples

| List | Output |
|------|--------|
| `3 → 2 → 0 → -4` (tail connects to index 1) | `true` |
| `1 → 2` (tail connects to index 0) | `true` |
| `1` | `false` |

## Constraints

- Number of nodes in `[0, 10^4]`
- `-10^5 <= Node.val <= 10^5`

## What you practice

- Floyd’s tortoise & hare (fast / slow pointers).
- Detecting a loop without extra space.

## Hints

1. Slow moves 1, fast moves 2. If they meet → cycle.
2. If fast hits null → no cycle.

## Approach (after you try)

- `slow = head`, `fast = head`. While `fast && fast.next`: advance slow once, fast twice; if equal, return true. Else false.

## Complexity

- **Time:** O(n)  
- **Space:** O(1)
