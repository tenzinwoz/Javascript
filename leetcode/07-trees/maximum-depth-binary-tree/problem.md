# Maximum Depth of Binary Tree

**Difficulty:** Easy  
**LeetCode:** [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

## Description

Given the `root` of a binary tree, return its **maximum depth** (number of nodes along the longest path from root to leaf).

A node is `{ val, left, right }` where `left`/`right` are nodes or `null`.

## Examples

| Tree (level order) | Depth |
|--------------------|-------|
| `[3, 9, 20, null, null, 15, 7]` | `3` |
| `[1, null, 2]` | `2` |

## Constraints

- `0 <= nodes <= 10^4`
- `-100 <= Node.val <= 100`

## What you practice

- DFS recursion: `1 + max(depth(left), depth(right))`; base case `null → 0`.

## Hints

1. Empty tree depth is 0.
2. Leaf has depth 1 from its own level (depending on definition: here “depth” = number of nodes on path, LeetCode style).

## Approach (after you try)

- Recursive DFS or BFS level counting.

## Complexity

- **Time:** O(n)  
- **Space:** O(h) recursion stack (h = height)
