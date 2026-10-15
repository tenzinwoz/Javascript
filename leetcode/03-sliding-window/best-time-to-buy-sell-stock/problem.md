# Best Time to Buy and Sell Stock

**Difficulty:** Easy  
**LeetCode:** [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

## Description

You are given prices `prices[i]` on day `i`. Choose **one** buy day and **one** sell day after the buy to **maximize** profit. If no profit is possible, return `0`.

## Examples

| Input | Output | Explanation |
|--------|--------|-------------|
| `[7, 1, 5, 3, 6, 4]` | `5` | Buy at 1, sell at 6 |
| `[7, 6, 4, 3, 1]` | `0` | Prices only drop |

## Constraints

- `1 <= prices.length <= 10^5`
- `0 <= prices[i] <= 10^4`

## What you practice

- One pass: track **minimum price so far** and **max profit** when selling today.

## Hints

1. For each day, best profit if you sell today is `price - minPriceBeforeToday`.
2. Update `minPrice` as you scan.

## Approach (after you try)

- `minSoFar = Infinity`, `best = 0`. For each `p`: `best = max(best, p - minSoFar)`, `minSoFar = min(minSoFar, p)`.

## Complexity

- **Time:** O(n)  
- **Space:** O(1)
