# Group Anagrams

**Difficulty:** Medium  
**LeetCode:** [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)

## Description

Given an array of strings `strs`, group the **anagrams** together. You can return the answer in any order.

An Anagram is a word formed by rearranging the letters of another, using all original letters exactly once.

## Examples

| Input | Output (any order of groups) |
|--------|------------------------------|
| `["eat","tea","tan","ate","nat","bat"]` | `[["bat"],["nat","tan"],["ate","eat","tea"]]` |
| `[""]` | `[[""]]` |
| `["a"]` | `[["a"]]` |

## Constraints

- `1 <= strs.length <= 10^4`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters

## What you practice

- Hash map keyed by a **canonical form** (sorted string or letter-count signature).
- Grouping by signature.

## Hints

1. Sorting each word → same key for anagrams.
2. Can you avoid sorting with a 26-count frequency key?

## Approach (after you try)

- Map: `sortedWord → list of words`. Push each word into its bucket; return `Object.values` / `[...map.values()]`.

## Complexity

- **Time:** O(n · k log k) with sort, or O(n · k) with count key (`k` = max word length)  
- **Space:** O(n · k)
