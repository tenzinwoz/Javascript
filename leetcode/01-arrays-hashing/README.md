# Arrays & Hashing

Use a **Map** (or plain object for string keys) or **Set** when you need **O(1) average** lookup, existence checks, or frequency counts. You often trade **extra space** for **time**.

**Signals:** “find two indices,” “duplicate,” “frequency,” “complement,” “anagram.”

**Pitfalls:** Order may not be preserved with objects; for numeric keys prefer `Map`. Consider edge cases: empty array, single element, duplicates.

## Problems

- **Full kit:** `two-sum`, `contains-duplicate`, `group-anagrams`, `product-of-array-except-self`, `top-k-frequent-elements`
- **Practice:** `three-sum`, `majority-element`, `move-zeroes`, `remove-duplicates`, `rotate-array`, `intersection-of-arrays`, `find-missing-number`, `merge-two-sorted-arrays`
