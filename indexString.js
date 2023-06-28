//Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

function strStr(haystack, needle){
    if(needle === "") return -1

    for(let i = 0; i < haystack.length; i++){
        if(haystack[i] === needle[0]){
            let match = true
            for(let j = 1; j < needle.length; j++){
                if(haystack[i + j] !== needle[j]){
                    match = false
                    break
                }
            }
            if(match){
                return i
            }
        }
    }
    return -1
}

let haystack = "sadbutsad"
let needle = "sad"
console.log(strStr(haystack, needle))

//time complexity - O((N-M)M)
//Space complexity - O(1)