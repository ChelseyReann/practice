/*
Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

Example Input:
let s = "ab"
let goal = "ba"

Example Output:
true

Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

Approach:
- check if the strings are the same length, return false if not
- check if s === goal
 - adding chars in s to a freqMap
 - if there are dupes in s that means a swap can happen and we can return true
 - otherwise return false
-loop through s and check for when s !== goal
- store these chars in a array
- check if this array is !== 2 in length - because if it's not return false because a proper swap is not happening
- destructure the mismatched array and set it equal to mismatchedIndices
- return s[idx1] === goal[idx2] && s[idx2] === goal[idx1]
*/