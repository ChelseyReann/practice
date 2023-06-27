// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// const longestCommonPrefix = (strs) => {
//     if (strs.length === 0) {
//         return ""
//     }

//     return strs.reduce((prefix, currentStr)=> {
//         let i = 0;
//         while (prefix[i] && prefix[i] === currentStr[i]){
//             i++
//         }
//         return prefix.slice(0,i)
//     });
// }



function longestCommonPrefix(strs){
    if(!strs.length) return ""

    for(let i = 0; i < strs[0].length; i++){
        for(let j = 1; j < strs.length; j++){
            if(strs[0][i] !== strs[j][i]){
                return strs[0].slice(0, i)
            }
        }
    }
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["cargo","carnivore","car"]))
//Time complexity - O(N*M) - N = number of strings and M = common prefix
//Space complexity - O(1) - doesn't use any additional data structures so it is using constant space