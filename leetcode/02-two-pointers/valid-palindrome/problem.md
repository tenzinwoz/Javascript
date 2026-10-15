# Valid Palindrome

**Difficulty:** Easy  
**LeetCode:** [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

## Description

Given a string `s`, return `true` if it reads the same forward and backward after **removing all non-alphanumeric characters** and **ignoring case**.

## Examples

| Input | Output |
|--------|--------|
| `"A man, a plan, a canal: Panama"` | `true` |
| `"race a car"` | `false` |
| `" "` | `true` |

## Constraints

- `1 <= s.length <= 2 * 10^5`
- `s` is printable ASCII.

## What you practice

- Two pointers from both ends.
- `isAlnum` / `toLowerCase` style normalization in JS (`charCodeAt` or regex).

## Hints

1. Skip non-alphanumeric from left and right until both point to letters/digits.
2. Compare lowercase (or code) forms; move inward.

## Approach (after you try)

- `left = 0`, `right = s.length - 1`. While `left < right`, advance past junk, compare; if mismatch return false.

## Complexity

- **Time:** O(n)  
- **Space:** O(1) if you only use indices (no new string of all filtered chars required for the optimal approach)
