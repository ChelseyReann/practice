/*
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

Approach:
- join the strings within each array
- return if the joined strs are === to each other
*/

function arrayStringsEqual(words1, words2){
   const str1 = words1.join("")
   const str2 = words2.join("")
   
   return str1 === str2
}

let words1 = ['ab', 'c']
let words2 = ['a', 'bc']
console.log(arrayStringsEqual(words1, words2))

//time complexity - O(N)
//space complexity - O(N)