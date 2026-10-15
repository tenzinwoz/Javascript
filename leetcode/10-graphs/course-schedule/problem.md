# Course Schedule

**Difficulty:** Medium  
**LeetCode:** [207. Course Schedule](https://leetcode.com/problems/course-schedule/)

## Description

There are `numCourses` courses labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` means you must take course `bi` before course `ai`.

Return `true` if you can finish all courses. Otherwise return `false` (there is a cycle in prerequisites).

## Examples

| numCourses | prerequisites | Output |
|------------|---------------|--------|
| `2` | `[[1,0]]` | `true` |
| `2` | `[[1,0],[0,1]]` | `false` |

## Constraints

- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= 5000`

## What you practice

- Graph cycle detection (DFS with visiting states, or Kahn’s topological sort / BFS).
- Building adjacency list from edges.

## Hints

1. Edge `bi → ai` (must take bi first).
2. Three states: unvisited / visiting / done. Hitting a visiting node → cycle.

## Approach (after you try)

- DFS coloring: `0` = unvisited, `1` = visiting, `2` = done. Or BFS: indegrees + queue of zero-indegree nodes.

## Complexity

- **Time:** O(V + E)  
- **Space:** O(V + E)
