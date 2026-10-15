# Binary Tree Level Order Traversal

**Difficulty:** Medium  
**LeetCode:** [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)

## Description

Given the `root` of a binary tree, return the **level order** traversal of its nodes' values (i.e., from left to right, level by level).

## Examples

| Input | Output |
|--------|--------|
| `[3,9,20,null,null,15,7]` | `[[3],[9,20],[15,7]]` |
| `[1]` | `[[1]]` |
| `[]` | `[]` |

## Constraints

- Number of nodes in `[0, 2000]`
- `-1000 <= Node.val <= 1000`

## What you practice

- BFS with a queue.
- Processing **one level at a time** using `queue.length`.

## Hints

1. Capture `size = queue.length` before the inner loop.
2. Pop `size` nodes for this level; push their children for the next.

## Approach (after you try)

- Queue BFS. For each level, build an array of `size` node values.

## Complexity

- **Time:** O(n)  
- **Space:** O(n)
