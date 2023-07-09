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
// let str1 = "apple"
// let str2 = 'aura'
// let str3 = "orange"
// let str4 = 'banana'
// console.log(booleanMatch(str1,str2))
// console.log(booleanMatch(str3,str4))
//Time complexity - O(N)
//Space complexity - O(1)


/*
Given two strings str1 and str2, write a function to return the count of distinct characters that match at the same positions in both strings.
Example Input: "hello", "helps"
Example Output: 3
*/

function countMatch(str1, str2){
    let count = 0

    for(let i = 0; i < str1.length; i++){
        if(str1[i] === str2[i]){
            count++
        }
    }
    return count
}

// let str1 = 'hello'
// let str2 = 'helps'
// console.log(countMatch(str1,str2))

//time complexity - O(N)
//space compelxity - O(1)

/*
Create a function that takes two strings as input and returns the indices where the characters differ at the same positions.
Example Input: "coffee", "cookie"
Example Output: [0, 3]
*/

function differentMatch(str1, str2){
    let results = []

    for(let i = 0; i < str1.length; i++){
        if(str1[i] !== str2[i]){
            results.push(i)
        }
    }
    return results
}

// let str1 = 'coffee'
// let str2 = 'cookie'
// let str3 = 'book'
// let str4 = 'look'
// console.log(differentMatch(str1, str2))
// console.log(differentMatch(str3, str4))
//time complexity - O(N)
//space complexity - O(1)

/* 
Write a function that accepts a string and a character and returns the indices of all occurrences of that character in the string.

Example Input: "Hello, World!", "o"
Example Output: [4, 8]

approach:
- create empty results array
- loop through string
- check if that index is equal to the target - push that index in the results array
- return results array
*/

function findTarget(str, target){
    let results = []

    for (let i = 0; i < str.length; i++){
        if(str[i].toLowerCase() === target){
            results.push(i)
        }
    }
    return results
}

// let str = 'HellO, World'
// let target = 'o'
// console.log(findTarget(str, target))

//Time complexity - O(N)
//space complexity - O(N)

/* 
Implement a function that receives a sentence and a word and returns the indices of all occurrences of that word within the sentence.

Example Input: "The cat and the dog sat on the mat.", "the"
Example Output: [0, 11, 19]

Approach:
- create results array
- loop through strings
- if the string contains the target push the index of that word into the results array
- return the results array
*/
//NEEDS TO BE SOLVED!!!!!!!!
function findWord(strs, target){
    let results = []
    let lowSentence = strs.toLowerCase()
    let lowWord = target.toLowerCase()
    let split = lowSentence.split(" ")

    let currentIndex = 0
    for (let i = 0; i < split.length; i++){
        if(split[i] === lowWord){
            const index = currentIndex + 1;
            results.push(index)
        }
        currentIndex += split[i].length + 1;
    }
    return results
}

// let strs = "The cat and the dog sat on the mat."
// let target1 = 'the'
// console.log(findWord(strs,target1))




/* 
Develop a function that takes a list of strings and a target string, and returns the indices of all strings in the list that contain the target string.

Example Input: ["apple", "banana", "grape", "kiwi"], "a"
Example Output: [0, 1, 3]

approach:
- create empty results array
- loop through array
- check if arr[i] === target, if yes push i into results
- return results
*/


