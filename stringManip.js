/* 
Write a function that takes two strings as input and returns the number of characters that match at the same positions.
Example Input: "hello", "hills"
Example Output: 3

Approach:
create a counter variable and set it to zero
create a freqMap and map characters from str1 & str 2
loop through the freqMap and for every char that equals 0 add 1 to the counter
return the counter

because of the double 'l' the freqMap will not work - don't know hoe to differenciate letter that are duplicates yet so implemented a counter and a simple for loop instead
*/

function matches(str1, str2){
    let counter = 0

    for (let i = 0; i < str1.length; i++){
        if(str1[i] === str2[i]){
            counter++
        }
    }
    return counter
}

// let str1 = "hello"
// let str2 = "hills"
// console.log(matches(str1, str2))

//time complexity - O(N)
//Space complexity - O(1)

/*
Implement a function that accepts two strings and returns true if they have at least one character in common at the same index, and false otherwise.
Example Input: "apple", "aura"
Example Output: true
Approach:
- loop through str1
- if the indices of both strings match return true
- otherwise return false
*/

function booleanMatch(str1, str2){
    for (let i = 0; i < str1.length; i++){
        if(str1[i] === str2[i]){
            return true
        }
    }
    return false
}
let str1 = "apple"
let str2 = 'aura'
let str3 = "orange"
let str4 = 'banana'
console.log(booleanMatch(str1,str2))
console.log(booleanMatch(str3,str4))
//Time complexity - O(N)
//Space complexity - O(1)



