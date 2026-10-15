# Search in Rotated Sorted Array

**Difficulty:** Medium  
**LeetCode:** [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)

## Description

There is an integer array `nums` sorted in ascending order (with **distinct** values). It is rotated at an unknown pivot.

Given `nums` and `target`, return the index of `target` if it is in `nums`, or `-1` if not. Must run in **O(log n)**.

## Examples

| Input | target | Output |
|--------|--------|--------|
| `[4,5,6,7,0,1,2]` | `0` | `4` |
| `[4,5,6,7,0,1,2]` | `3` | `-1` |
| `[1]` | `0` | `-1` |

## Constraints

- `1 <= nums.length <= 5000`
- All values unique
- `nums` is a rotation of a sorted array

## What you practice

- Binary search on a rotated array.
- Deciding which half is sorted and whether target lies in it.

## Hints

1. At least one of `[lo..mid]` or `[mid..hi]` is sorted.
2. Check if `target` is inside the sorted half; shrink the other way otherwise.

## Approach (after you try)

- Classic modified binary search: compare `nums[lo]` and `nums[mid]` to know which side is sorted.

## Complexity

- **Time:** O(log n)  
- **Space:** O(1)
