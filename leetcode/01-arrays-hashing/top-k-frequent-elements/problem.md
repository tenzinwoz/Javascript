# Top K Frequent Elements

**Difficulty:** Medium  
**LeetCode:** [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

## Description

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.

## Examples

| Input | k | Output (any order) |
|--------|---|---------------------|
| `[1,1,1,2,2,3]` | `2` | `[1,2]` |
| `[1]` | `1` | `[1]` |

## Constraints

- `1 <= nums.length <= 10^5`
- `k` is in the range `[1, number of unique elements]`
- Answer is unique

## What you practice

- Frequency map + **bucket sort** (or heap).
- Avoid full sort when you only need top k.

## Hints

1. Count frequencies first.
2. Buckets indexed by frequency: `freq → [numbers]`, then walk from high freq down.

## Approach (after you try)

- Count with Map. Build `buckets[count] = list of nums`. Collect from `buckets.length - 1` down until you have `k` items.

## Complexity

- **Time:** O(n) with bucket sort  
- **Space:** O(n)
