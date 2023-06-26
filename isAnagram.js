//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function isAnagram(s,t){
    if(s.length !== t.length){
        return false;
    }

    let charAmt = {};

    for (let i = 0; i < s.length; i++){
        let charS = s[i];
        let charT = t[i];

        if(!charAmt[charS]){
            charAmt[charS] = 1;
        } else {
            charAmt[charS]++;
        }

        if(!charAmt[charT]){
            charAmt[charT] = -1;
        } else {
            charAmt[charT]--;
        }
    }

    for (let everyChar in charAmt){
        if(charAmt[everyChar] !== 0){
            return false;
        }
    }

    return true;
}

let s = "anagram";
let t = "nagaram";
console.log(isAnagram(s,t))