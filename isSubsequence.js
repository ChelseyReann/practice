/*Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

function isSubsequence(s,t){
    let sIndex = 0
    let tIndex = 0

    while (sIndex < s.length && tIndex < t.length){
        if(s[sIndex] === t[tIndex]){
            sIndex++
        }
        tIndex++
    }
    return sIndex === s.length
}

let s = 'abc'
let t = 'ahbgdc'
let s1 = 'axc'
let t1 = 'ahbgdc'
console.log(isSubsequence(s,t))
console.log(isSubsequence(s1,t1))

//Time complexity - O(N) 
//Space complexity - O(1)