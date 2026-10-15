# Validate Binary Search Tree

**Difficulty:** Medium  
**LeetCode:** [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

## Description

Given the `root` of a binary tree, determine if it is a valid **binary search tree** (BST).

A valid BST: for every node, all values in the left subtree are **strictly less**, and all in the right are **strictly greater**. This must hold for every subtree.

## Examples

| Input | Output |
|--------|--------|
| `[2,1,3]` | `true` |
| `[5,1,4,null,null,3,6]` | `false` |

## Constraints

- Number of nodes in `[1, 10^4]`
- `-2^31 <= Node.val <= 2^31 - 1`

## What you practice

- DFS with **valid range** `(low, high)`.
- Or inorder traversal must be strictly increasing.

## Hints

1. Passing only parent value is not enough (grandparent constraints).
2. Left child must be `< node.val` and still `> low`.

## Approach (after you try)

- `dfs(node, low, high)`: if `node.val <= low || node.val >= high` → false. Recurse left with `(low, node.val)`, right with `(node.val, high)`.

## Complexity

- **Time:** O(n)  
- **Space:** O(h)
