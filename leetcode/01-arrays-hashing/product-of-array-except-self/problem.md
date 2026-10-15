# Product of Array Except Self

**Difficulty:** Medium  
**LeetCode:** [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)

## Description

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all elements of `nums` **except** `nums[i]`.

Solve it in **O(n)** time **without** using division, and with **O(1) extra space** (output array does not count).

## Examples

| Input | Output |
|--------|--------|
| `[1,2,3,4]` | `[24,12,8,6]` |
| `[-1,1,0,-3,3]` | `[0,0,9,0,0]` |

## Constraints

- `2 <= nums.length <= 10^5`
- `-30 <= nums[i] <= 30`
- Product fits in a 32-bit integer

## What you practice

- Prefix / suffix products.
- Building answer in two passes without division.

## Hints

1. `answer[i] = (product of left) * (product of right)`.
2. Fill left products first, then multiply by a running right product from the end.

## Approach (after you try)

- Pass 1: `answer[i] = product of nums[0..i-1]`.
- Pass 2: running `right`, multiply `answer[i] *= right`, then `right *= nums[i]`.

## Complexity

- **Time:** O(n)  
- **Space:** O(1) extra (excluding output)
