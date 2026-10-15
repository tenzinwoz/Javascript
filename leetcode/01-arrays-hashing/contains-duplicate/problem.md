# Contains Duplicate

**Difficulty:** Easy  
**LeetCode:** [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

## Description

Given an integer array `nums`, return `true` if **any** value appears **at least twice**, otherwise return `false`.

## Examples

| Input | Output |
|--------|--------|
| `[1, 2, 3, 1]` | `true` |
| `[1, 2, 3, 4]` | `false` |
| `[1, 1, 1, 3, 3, 4, 3, 2]` | `true` |

## Constraints

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## What you practice

- `Set` for uniqueness, or sort + adjacent check (different tradeoffs).

## Hints

1. Insert each number into a set; if `size` doesn’t grow, you found a duplicate.
2. Alternative: sort and compare neighbors — O(n log n) time, O(1) extra if sorting in place.

## Approach (after you try)

- **Set:** iterate; if `set.has(x)` return true; else `set.add(x)`.

## Complexity

- **Time:** O(n) with set  
- **Space:** O(n)
