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

function buddySwap(s, goal){
    if(s.length !== goal.length) return false

    if(s === goal){
        let freqMap = {}
        for(let char of s){
            if(freqMap[char]){
                return true
            }
            freqMap[char] = 1
        }
        return false
    }

    let mismatchedIndices = []
    for(let i = 0; i < s.length; i++){
        if(s[i] !== goal[i]){
            mismatchedIndices.push(i)
        }
    }

    if(mismatchedIndices.length !== 2) return false

    let [ind1, ind2] = mismatchedIndices
    return s[ind1] === goal[ind2] && s[ind2] === goal[ind1]
}

let s = "ab"
let goal = "ba"

let s1 = "ab"
let goal1 = 'ab'

let s2 = "aa"
let goal2 = 'aa'
console.log(buddySwap(s, goal))
console.log(buddySwap(s1, goal1))
console.log(buddySwap(s2, goal2))