// Write a function that takes a string as input and finds the longest palindrome substring within that string. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
//For example, in the string "babad", the longest palindrome substring is "bab".

function palindromeCheck(str){
    let longest = ''

    function isPalindrome(s){
        return s === s.split("").reverse().join("")
    }

    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            const substring = str.substring(i, j)

            if(isPalindrome(substring) && substring.length > longest.length){
                longest = substring;
            }
        }
    }
    return longest
}

let str = "babad"
console.log(palindromeCheck(str))