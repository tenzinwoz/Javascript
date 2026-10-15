# Maximum Subarray (Kadane)

**Difficulty:** Medium  
**LeetCode:** [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

## Description

You get an array of integers. Find a **chunk of neighbors** (no gaps) whose numbers add up to the **biggest total** possible, and return that total.

## Examples

| Input | Output |
|--------|--------|
| `[-2, 1, -3, 4, -1, 2, 1, -5, 4]` | `6` (subarray `[4, -1, 2, 1]`) |
| `[1]` | `1` |
| `[5, 4, -1, 7, 8]` | `23` |

## Constraints

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

## What you practice

- **Kadane’s algorithm:** at each index, either grow the subarray you’re on or throw it away and start over at the current number.

## Hints

1. Keep a `current` sum “ending right here”: either add `nums[i]` to what you had, or reset to just `nums[i]`—whichever is larger.
2. Keep a `best` that’s the max `current` you’ve seen so far.

## Approach (after you try)

- Kadane: O(n), O(1) space.

## Complexity

- **Time:** O(n)  
- **Space:** O(1)
