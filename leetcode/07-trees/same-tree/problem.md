# Same Tree

**Difficulty:** Easy  
**LeetCode:** [100. Same Tree](https://leetcode.com/problems/same-tree/)

## Description

Given roots `p` and `q` of two binary trees, return `true` if they are **structurally identical** and nodes have the **same values** at each position.

## Examples

| p | q | Output |
|---|---|--------|
| `[1, 2, 3]` | `[1, 2, 3]` | `true` |
| `[1, 2]` | `[1, null, 2]` | `false` |
| `[1, 2, 1]` | `[1, 1, 2]` | `false` |

## Constraints

- `0 <= nodes <= 100`
- `-10^4 <= Node.val <= 10^4`

## What you practice

- Recursive structure compare: both null → true; one null → false; values differ → false; else recurse left and right.

## Hints

1. Match LeetCode: compare `p` and `q` in lockstep.
2. Iterative: two queues (optional).

## Approach (after you try)

- DFS recursion is the usual interview answer.

## Complexity

- **Time:** O(min(n, m))  
- **Space:** O(h) stack
