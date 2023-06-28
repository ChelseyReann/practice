//Write a function that takes two strings as input and checks if they are anagrams of each other. An anagram is a word formed by rearranging the letters of another word.
//For example 'listen' and 'silent' are anagrams

function anagramCheck(str1, str2){
    if(str1.length !== str2.length) return false
    let freqMap = {}

    for(let i = 0; i < str1.length; i++){
        if(!freqMap[str1[i]]){
            freqMap[str1[i]] = 1
        } else {
            freqMap[str1[i]]++
        }
    }

    for(let i = 0; i < str2.length; i++){
        if(!freqMap[str2[i]] || freqMap[str2[i]] === 0){
            return false
        }
        freqMap[str2[i]]--
    }
    return true
}


// console.log(anagramCheck(str1,str2))

function anagram(str1,str2){
    if(str1.length !== str2.length) return false

    let freqMap = {}

    for(let i = 0; i < str1.length; i++){
        if(!freqMap[str1[i]]){
            freqMap[str1[i]] = 1
        } else {
            freqMap[str1[i]]++
        }
        console.log(freqMap)

        if(!freqMap[str2[i]]){
            freqMap[str2[i]] = -1
        } else {
            freqMap[str2[i]]--
        }
        console.log(freqMap)
    }

    for(let everychar in freqMap){
        if(freqMap[everychar] !== 0){
            return false
        }
    }

    return true
}

let str1 = "listen"
let str2 = "silent"
console.log(anagram(str1,str2))