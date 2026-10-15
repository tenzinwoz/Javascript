# Valid Parentheses

**Difficulty:** Easy  
**LeetCode:** [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

## Description

Given a string `s` containing only `'('`, `')'`, `'{'`, `'}'`, `'['`, `']'`, determine if the bracket ordering is valid:

- Open brackets must be closed by the **same type** in the **correct order**.
- Every close bracket has a matching open bracket before it.

## Examples

| Input | Output |
|--------|--------|
| `"()"` | `true` |
| `"()[]{}"` | `true` |
| `"(]"` | `false` |

## Constraints

- `1 <= s.length <= 10^4`

## What you practice

- Stack for **last unmatched opener**; map closers to openers.

## Hints

1. Push opening brackets; on closing, stack must be non-empty and top must match.
2. End with empty stack.

## Approach (after you try)

- Use stack of chars; pairing map `) -> (`, etc.

## Complexity

- **Time:** O(n)  
- **Space:** O(n)
