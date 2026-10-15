# Two Pointers

Maintain **two indices** (start/end or slow/fast) and move them based on a rule until you’ve scanned what you need.

**Sorted array variant:** Often start `left = 0`, `right = n - 1`, move inward (classic for “pair sums to target” when sorted).

**Signals:** “sorted,” “palindrome,” “pair,” “subarray with sum,” “merge two sorted.”

**Pitfalls:** Off-by-one on `right`; forgetting that two-pointer tricks on **unsorted** arrays may need a different approach (e.g. hash map).

## Problems

- `valid-palindrome`, `two-sum-ii-sorted`, `container-with-most-water`