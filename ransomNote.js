/* 
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

approach:
- create a freqMap
- loop through the ransomNote and add it to the freqMap
- loop through the magazine and decrease it's chars from the freqMap
- loop through the freqMap and if the count of each character is more than 0 then return false
- other wise return true
*/

function canConstruct(ransomNote, magazine){
    let freqMap = {}

    for (let i = 0; i < ransomNote.length; i++){
        if(!freqMap[ransomNote[i]]){
            console.log("freqMap[ransomNote[i]] = 1: " + freqMap[ransomNote[i]])
            freqMap[ransomNote[i]] = 1
        } else {
            console.log("freqMap[ransomNote[i]]++: " + freqMap[ransomNote[i]])
            freqMap[ransomNote[i]]++
        }
    }

    for (let i = 0; i < magazine.length; i++){
        if(freqMap[magazine[i]]){
            console.log("freqMap[magazine[i]" + freqMap[magazine[i]])
            freqMap[magazine[i]]--
        }
    }

    for(let char in freqMap){
        if(freqMap[char] > 0){
            console.log("freqMap[char]: " + freqMap[char])
            return false
        }
    }

    return true
}

let ransomNote = 'a'
let magazine = 'b'
let ransomNote2 = 'aa'
let magazine2 = 'ab'
let ransomNote3 = 'aa'
let magazine3 = 'aab'
// console.log(canConstruct(ransomNote,magazine))
// console.log(canConstruct(ransomNote2,magazine2))
console.log(canConstruct(ransomNote3,magazine3))