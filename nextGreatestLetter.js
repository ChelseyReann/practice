/*
You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters
*/

function nextGreatestLetter(letters, target){
    for(let i = 0; i < letters.length; i++){
        if(letters[i] > target){
            return letters[i]
        }
    }
    return letters[0]
}

let letters = ['c', 'f', 'j']
let target = 'a'
console.log(nextGreatestLetter(letters, target))