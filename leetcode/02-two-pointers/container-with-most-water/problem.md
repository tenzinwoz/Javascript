# Container With Most Water

**Difficulty:** Medium  
**LeetCode:** [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)

## Description

You are given an integer array `height` of length `n`. There are `n` vertical lines; the two endpoints of the `i`th line are `(i, 0)` and `(i, height[i])`.

Find two lines that form a container with the x-axis that holds the **most water**. Return the maximum amount of water.

## Examples

| Input | Output |
|--------|--------|
| `[1,8,6,2,5,4,8,3,7]` | `49` |
| `[1,1]` | `1` |

## Constraints

- `n == height.length`
- `2 <= n <= 10^5`
- `0 <= height[i] <= 10^4`

## What you practice

- Two pointers from both ends.
- Greedy: move the shorter side inward.

## Hints

1. Area = `min(h[L], h[R]) * (R - L)`.
2. Moving the taller pointer never helps; move the shorter one.

## Approach (after you try)

- `L = 0`, `R = n - 1`. Track max area. While `L < R`, update max, then move the side with smaller height.

## Complexity

- **Time:** O(n)  
- **Space:** O(1)
