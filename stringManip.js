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

    for (let i = 0; i < split.length; i++){
        if(split[i] === lowWord){
            results.push(i)
        }
    }
    return results
}

let strs = "The cat and the dog sat on the mat."
let target1 = 'the'
console.log(findWord(strs,target1))




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

function findStr(arr, target){
    let results = []
    // let arrSplit = arr.split(" ")
    // console.log(arrSplit)

    for (let i = 0; i < arr.length; i++){
        if(arr[i].includes(target)){
            results.push(i)
        }
    }
    return results
}

// let arr = ["apple", "banana", "grape", "kiwi"]
// let target = 'a'
// console.log(findStr(arr, target))

/* 
Write a function that accepts a string and returns the count of vowels and consonants in the string. The function should iterate over each character in the string and categorize them as vowels or consonants based on a predefined set of vowels.

Approach:
- create a vowel counter
- create a consonant counter
- create a vowel array
- loop through the string and check if vowels includes what is at the string at that index if it does then vowel counter ++ otherwise consonant counter++
- return {Vowels: vowelCounter,
Consonants: consonantsCounter}
*/
function letterIdentify(str){
    let vowelCount = 0
    let consonantsCount = 0
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    for (let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase()
        console.log(char)
        if(vowels.includes(char)){
            vowelCount++
        } else if(char >= 'a' && char <= 'z') {
            consonantsCount++
        }
    }

    return "vowels: " + vowelCount + " , " + "consonants: " + consonantsCount
}

// let str = 'Hello World'
// console.log(letterIdentify(str))

/* 
Write a function that accepts two strings and returns the longest common subsequence (LCS) between them. The LCS is the longest sequence of characters that appears in the same order in both strings, but not necessarily consecutively.
Example Input:
String 1: "ABCDGH"
String 2: "AEDFHR"

Example Output:
Longest Common Subsequence: "ADH"

In this example, the function receives two strings, "ABCDGH" and "AEDFHR". The longest common subsequence (LCS) between the two strings is "ADH". It is the longest sequence of characters that appears in the same order in both strings but not necessarily consecutively.

Approach:
- create a freqMap
- create an empty results array - can split it back into a string later
- loop through str1 adding elements to freqMap
- go through str2 and decrease quanity in freqMap
- loop through freqMap and for any keys that === 0 push those in results
- return results.split("")
*/

function LCS(str1, str2){
    let results = []
    let freqMap = {}

    for (let i = 0; i < str1.length; i++){
        if(!freqMap[str1[i]]){
            freqMap[str1[i]] = 1
        } else {
            freqMap[str1[i]]++
        }

        if(!freqMap[str2[i]]){
            freqMap[str2[i]] = -1
        } else {
            freqMap[str2[i]]--
        }
    }

    for(let key in freqMap){
        if(freqMap[key] === 0){
            results.push(key)
        }
    }
    return results.join("")
}

// let str1 = "ABCDGH"
// let str2 = "AEDFHR"
// console.log(LCS(str1,str2))

//time complexity - O(N)
//space complexity - O(N)
