# Sliding Window

Maintain a **window** `[left, right]` over an array/string and update **aggregate** (sum, counts, uniqueness) as you expand/shrink.

**Fixed window:** Size `k` — slide one step at a time.  
**Variable window:** Grow `right` until invalid, then shrink `left` until valid again.

**Signals:** “longest/shortest substring,” “subarray sum,” “at most K distinct.”

**Pitfalls:** Forgetting to update the aggregate when moving `left`; confusing “at most” vs “exactly.”
