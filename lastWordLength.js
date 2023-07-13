/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring consisting of non-space characters only.
*/

function lastWordLength(s){
   let trimmedString = s.trim()

   return trimmedString.length - trimmedString.lastIndexOf(" ") - 1
}

let s = "Hello World"
console.log(lastWordLength(s))

//Time complexity - O(N)
//Space complexity - O(1)