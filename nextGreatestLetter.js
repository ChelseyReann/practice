/*
You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters
*/

/*
Approach:
Iterate through the letters array
check if the letter you're currently iterating through is greater than the target. If yes, return the letter at that index
if no letter is found that is greater then return letter[0] 
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
let letters1 = ['c', 'f', 'j']
let target1 = 'c'
let letters2 = ['x', 'x', 'y', 'y']
let target2 = 'z'
console.log(nextGreatestLetter(letters, target))
console.log(nextGreatestLetter(letters1, target1))
console.log(nextGreatestLetter(letters2, target2))