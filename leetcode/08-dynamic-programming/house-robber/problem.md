# House Robber

**Difficulty:** Medium  
**LeetCode:** [198. House Robber](https://leetcode.com/problems/house-robber/)

## Description

You are a robber along a street of houses `nums[i]` = money in house `i`. You **cannot rob two adjacent** houses. Return the **maximum** money you can rob.

## Examples

| nums | Output |
|------|--------|
| `[1, 2, 3, 1]` | `4` (rob 0 and 2) |
| `[2, 7, 9, 3, 1]` | `12` (2 + 9 + 1) |

## Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 400`

## What you practice

- DP: at house `i`, `best = max(prevBest, nums[i] + prevPrevBest)`.

## Hints

1. Either skip this house (take `prev`) or rob it (take `nums[i] + prevPrev`).
2. Track two running values instead of full array.

## Approach (after you try)

- Linear scan with `take` / `skip` or `dp0`, `dp1` rolling.

## Complexity

- **Time:** O(n)  
- **Space:** O(1)
