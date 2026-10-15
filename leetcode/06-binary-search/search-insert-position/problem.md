# Search Insert Position

**Difficulty:** Easy  
**LeetCode:** [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)

## Description

Given sorted **distinct** `nums` and `target`, return the index `k` where `target` should be inserted to keep order: smallest `k` such that all values to the left are `< target` (equivalently, first position where `nums[k] >= target`, or `nums.length` if all smaller).

## Examples

| nums | target | Output |
|------|--------|--------|
| `[1, 3, 5, 6]` | `5` | `2` |
| `[1, 3, 5, 6]` | `2` | `1` |
| `[1, 3, 5, 6]` | `7` | `4` |

## Constraints

- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i], target <= 10^4`
- Sorted distinct ascending.

## What you practice

- Binary search for **lower bound** (first `>= target`).

## Hints

1. You can binary search for the leftmost index where `nums[mid] >= target`.
2. Or use the same loop as classic search but track candidate insert position.

## Approach (after you try)

- `left = 0`, `right = n`; while `left < right`: `mid`, if `nums[mid] < target` then `left = mid + 1` else `right = mid`. Return `left` (half-open interval variant).

## Complexity

- **Time:** O(log n)  
- **Space:** O(1)
