/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Approach: 
- create a variable and change x into a string so I can split, reverse and join it back together
- return if modX === x
*/

function palindromeNum(x){
    let modX = Number(String(x).split("").reverse().join(""))

    return modX === x
}

let x = 121
let x2 = -121
let x3 = 10
console.log(palindromeNum(x))
console.log(palindromeNum(x2))
console.log(palindromeNum(x3))

//Time complexity - O(log n)
//space complexity - O(1)


