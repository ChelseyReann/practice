//Write a function that takes a string as input and returns the reverse of that string.
//For example, if the inout is 'hello' the output should be 'olleh'

function reverseString(str){
    let r = str.split("").reverse().join("")
    return r
}

let str = "hello"
console.log(reverseString(str))