# Two Sum II — Input Array Is Sorted

**Difficulty:** Medium  
**LeetCode:** [167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

## Description

Given a **1-indexed** sorted array of integers `numbers` (ascending) and `target`, return the **1-indexed** positions `[i, j]` with `i < j` such that `numbers[i-1] + numbers[j-1] === target`. Exactly one solution exists.

## Examples

| Input | Target | Output |
|--------|--------|--------|
| `[2, 7, 11, 15]` | `9` | `[1, 2]` |
| `[2, 3, 4]` | `6` | `[1, 3]` |
| `[-1, 0]` | `-1` | `[1, 2]` |

## Constraints

- `2 <= numbers.length <= 3 * 10^4`
- `-1000 <= numbers[i] <= 1000`
- `numbers` is sorted ascending.
- `-1000 <= target <= 1000`
- Exactly one solution.

## What you practice

- Two pointers on sorted data (no hash map needed).

## Hints

1. Start `left` at start, `right` at end. If sum too small, increase `left`; if too large, decrease `right`.
2. Return indices **1-based** as the problem asks.

## Approach (after you try)

- Classic two-pointer squeeze until `sum === target`.

## Complexity

- **Time:** O(n)  
- **Space:** O(1)
