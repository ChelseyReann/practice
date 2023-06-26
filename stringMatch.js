//Write a function that accepts 2 strings & returns the indices of those strings where the characters match.
//Example Input -> "hello" "help"
//Example Output -> [0,1,2]

function stringMatch(str1, str2){
    let results = []

    for(let i = 0; i < str1.length && i < str2.length; i++){
            if(str1[i] === str2[i]){
                results.push(i)
            }
        }
    return results
}

let str1 = "hello"
let str2 = "help"
console.log(stringMatch(str1, str2))

//Write a function that accepts two strings and returns the indices of the second string if they are contained in the first string and are not at the same index.
//Example Input -> "HELLO" "LEGOS"
//Example Output -> [0,3]

function getIndicies(str1, str2){
    let results = [];
    let str1Chars = {};

    for (let i = 0; i < str1.length; i++){
        let char1 = str1[i];
        if(!str1Chars[char1]){
            str1Chars[char1] = true;
        }
    }

    for (let i = 0; i < str2.length; i++){
        let char2 = str2[i];
        if(str1Chars[char2] && str1[i] !== str2[i]){
            results.push(i)
        }
    }

    return results;
}

let string1 = "HELLO";
let string2 = "LEGOS";
console.log(getIndicies(string1, string2))

//Write a function that accepts 2 strings and returns the colors green, red, and yellow based on the folloeing factors. Green if the characters match in both strings at the same index, yellow if the character exists in both strings but not in the same index, and red if the character in string 2 doesn't exist in string 1.

function getColors(str1, str2){
    let results = [];
    let str1Chars = {};

    for (let i = 0; i < str1.length; i++){
        let char1 = str1[i];
        if(!str1Chars[char1]){
            str1Chars[char1] = true;
        }
    }

    for(let i = 0; i < str2.length; i++){
        let char2 = str2[i];
        if(str1[i] === str2[i]){
            results.push("green");
        } else if(str1Chars[char2] && str1[i] !== str2[i]){
            results.push("yellow");
        } else {
            results.push("red");
        }
    }
    return results;
}

let s1 = "HELLO";
let s2 = "LEGOS";
let st1 = "CHELSEY";
let st2 = "TAYLORS"
console.log(getColors(s1, s2))
console.log(getColors(st1, st2))