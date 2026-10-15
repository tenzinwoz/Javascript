# Two Sum

**Difficulty:** Easy  
**LeetCode:** [1. Two Sum](https://leetcode.com/problems/two-sum/)

## Description

Given an array of integers `nums` and an integer `target`, return **indices** `i` and `j` such that `nums[i] + nums[j] === target` and `i !== j`. You may assume **exactly one** solution exists.

## Examples

| Input | Target | Output |
|--------|--------|--------|
| `[2, 7, 11, 15]` | `9` | `[0, 1]` |
| `[3, 2, 4]` | `6` | `[1, 2]` |
| `[3, 3]` | `6` | `[0, 1]` |

## Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Exactly one valid answer.

## What you practice

- Hash map: store **value → index** (or complement lookup).
- One pass: for each `x`, check if `target - x` was seen.

## Hints

1. Brute force is O(n²); can you remember past values in O(1)?
2. If you use a map from number → index, watch duplicate keys (later index overwrites — is that OK here?).

## Approach (after you try)

- **Map:** `seen` maps `num -> index`. For each `i`, if `target - nums[i]` is in `seen`, return `[seen.get(target - nums[i]), i]`; else set `seen.set(nums[i], i)`.

## Complexity

- **Time:** O(n)  
- **Space:** O(n)
