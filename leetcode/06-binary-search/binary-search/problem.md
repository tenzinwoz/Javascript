# Binary Search

**Difficulty:** Easy  
**LeetCode:** [704. Binary Search](https://leetcode.com/problems/binary-search/)

## Description

Given sorted **ascending** distinct integers `nums` and `target`, return the **index** of `target`, or `-1` if not present.

## Examples

| nums | target | Output |
|------|--------|--------|
| `[-1, 0, 3, 5, 9, 12]` | `9` | `4` |
| `[-1, 0, 3, 5, 9, 12]` | `2` | `-1` |

## Constraints

- `1 <= nums.length <= 10^4`
- `-10^4 < nums[i], target < 10^4`
- `nums` sorted ascending distinct.

## What you practice

- Inclusive/exclusive bounds, `mid`, shrinking interval.

## Hints

1. Common pattern: `left = 0`, `right = nums.length - 1`, `while (left <= right)`.
2. `mid = left + Math.floor((right - left) / 2)`; compare `nums[mid]` with `target`.

## Approach (after you try)

- Classic closed-interval binary search.

## Complexity

- **Time:** O(log n)  
- **Space:** O(1)
