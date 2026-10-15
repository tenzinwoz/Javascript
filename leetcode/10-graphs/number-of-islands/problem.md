# Number of Islands

**Difficulty:** Medium  
**LeetCode:** [200. Number of Islands](https://leetcode.com/problems/number-of-islands/)

## Description

Given an `m x n` 2D binary grid which represents a map of `'1'` (land) and `'0'` (water), return the number of **islands**.

An island is surrounded by water and formed by connecting adjacent lands **horizontally or vertically** (not diagonally).

## Examples

```
Input:
[
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

```
Input:
[
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```

## Constraints

- `1 <= m, n <= 300`
- `grid[i][j]` is `'0'` or `'1'`

## What you practice

- Grid DFS / BFS.
- Connected components: sink/visit each island once.

## Hints

1. Scan every cell; when you see `'1'`, increment count and flood-fill.
2. Mark visited by setting to `'0'` (or a visited set).

## Approach (after you try)

- For each unvisited land, DFS/BFS in 4 directions, mark visited, count++.

## Complexity

- **Time:** O(m · n)  
- **Space:** O(m · n) worst-case recursion/queue
