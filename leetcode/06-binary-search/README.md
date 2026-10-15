# Binary Search

Halve the search space each step. Keep a **loop invariant** (e.g. “answer lies in `[lo, hi]`”) and pick `mid` carefully to avoid infinite loops.

**Signals:** “sorted array,” “first/last position,” “sqrt,” “minimize maximum.”

**Pitfalls:** `while (lo < hi)` vs `lo <= hi`; `mid = lo + Math.floor((hi - lo) / 2)` to avoid overflow in other languages (good habit in JS too).

## Problems

- `binary-search`, `search-insert-position`, `search-in-rotated-sorted-array`