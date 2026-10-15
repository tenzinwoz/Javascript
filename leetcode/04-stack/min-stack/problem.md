# Min Stack

**Difficulty:** Medium  
**LeetCode:** [155. Min Stack](https://leetcode.com/problems/min-stack/)

## Description

Design a stack that supports:

- `push(val)` — push `val`
- `pop()` — remove top
- `top()` — return top
- `getMin()` — return **minimum** among all elements in the stack

All operations must be **O(1)** **amortized** (standard stack + extra bookkeeping).

## Example (sequence)

```
push(-2), push(0), push(-3) → getMin() → -3
pop() → top() → 0, getMin() → -2
```

## Constraints

- `-2^31 <= val <= 2^31 - 1`
- `pop`, `top`, `getMin` only when stack is non-empty.

## What you practice

- Auxiliary stack (or pairs) storing **min so far** with each level.

## Hints

1. Keep a second stack of minimums: push `min(val, minStack.peek())` when pushing.
2. On pop, pop both stacks together.

## Approach (after you try)

- `data` stack + `mins` stack where `mins` top is current minimum.

## Complexity

- **Time:** O(1) per op  
- **Space:** O(n)
