/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
*/

function mathSq(x){
    return Math.floor(Math.sqrt(x))
}

let x = 4
let x2 = 8
console.log(mathSq(x))
console.log(mathSq(x2))