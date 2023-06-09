/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 Approach:
 - create two pointers - start & end
 - start a while loop - while start <= end
 - introduce the current variable which is equal to the string at [0 or start]
 - need to manually reverse the order of the characters. but how?
 - have the start = to the end 
 - have the end = to current 
 - those two steps ensures the swap and then we increment start and decrement end to iterate through
 - nothing to return
*/

function reverseString(s){
    let start = 0
    let end = s.length - 1
    let split = s.split("")
    console.log(split)

    while (start < end){
        let current = split[start]
        split[start] = split[end]
        split[end] = current
        start++
        end--
    }
    return split.join("")
}

let s = 'chelsey'
console.log(reverseString(s))

//Time complexity - O(N)
//Space complexity - O(N)