# Climbing Stairs

**Difficulty:** Easy  
**LeetCode:** [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

## Description

You can climb `n` stairs, taking **1** or **2** steps each time. In how many **distinct ways** can you reach the top?

## Examples

| n | Output |
|---|--------|
| `2` | `2` (1+1, 2) |
| `3` | `3` (1+1+1, 1+2, 2+1) |
| `4` | `5` |

## Constraints

- `1 <= n <= 45`

## What you practice

- **Fibonacci-style** recurrence: `ways(n) = ways(n-1) + ways(n-2)`.
- Bottom-up two variables or memo array.

## Hints

1. Last step either from `n-1` or `n-2`.
2. Base: `ways(1)=1`, `ways(2)=2`.

## Approach (after you try)

- O(n) time, O(1) space with `a, b` rolling.

## Complexity

- **Time:** O(n)  
- **Space:** O(1) with rolling variables
