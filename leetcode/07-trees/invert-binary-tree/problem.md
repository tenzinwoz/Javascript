# Invert Binary Tree

**Difficulty:** Easy  
**LeetCode:** [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

## Description

Given the `root` of a binary tree, invert the tree (swap every left and right child), and return its root.

## Examples

| Input (level order) | Output |
|---------------------|--------|
| `[4,2,7,1,3,6,9]` | `[4,7,2,9,6,3,1]` |
| `[2,1,3]` | `[2,3,1]` |
| `[]` | `[]` |

## Constraints

- Number of nodes in `[0, 100]`
- `-100 <= Node.val <= 100`

## What you practice

- DFS recursion or BFS swap.
- Tree pointer rewriting.

## Hints

1. Swap `left` and `right`, then recurse on both children.
2. Base case: `null` returns `null`.

## Approach (after you try)

- Recursive: swap children, invert left, invert right. Or BFS queue swapping each node’s children.

## Complexity

- **Time:** O(n)  
- **Space:** O(h) recursion / O(n) queue
