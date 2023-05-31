/*-----------------------------------------------------------------
Challenge: 07-reverseUpcaseString
Difficulty: Basic
Prompt:
- Write a function called reverseUpcaseString that accepts a single string argument, then returns the string with its characters in reverse order and converts all characters to uppercase.
Examples:
reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES" 
-----------------------------------------------------------------*/
// Your solution for 07-reverseUpcaseString here:

const reverseUpcaseString = (str) => {
    let results = '';
    for (let i =0; i < str.length; i++) {
        results = str.charAt(i).toUpperCase() + results;
    }
    return results;
}

console.log(reverseUpcaseString("SEI Rocks!"))