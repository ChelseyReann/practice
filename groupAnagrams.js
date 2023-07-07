/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Approach:
 - create an empty results array
 - create an empty freqMap
 - loop through the strings array
 - add them to the freqMap
 - create an empty str array
 - if the strs contain all the same characters push them into the str array and then push them into the results array
 - return the results array
*/

function groupAnagrams(strs){
    let results = []
    let freqMap = {}

    if(strs.length === 0){
        return results
    }

    for(let str of strs){
        let sortedStr = str.split("").sort().join("")
        console.log("sorted string: " + sortedStr)
        if(freqMap[sortedStr]){
            freqMap[sortedStr].push(str)
            console.log("str: " + str)
            console.log("freqMap: " + JSON.stringify(freqMap))
        } else {
            freqMap[sortedStr] = [str]
        }
    }

    for(let key in freqMap){
        results.push(freqMap[key])
        console.log("results: " + results)
        console.log("freqMap[key]: " + freqMap[key])
    }

    return results
}

let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
console.log(groupAnagrams(strs))