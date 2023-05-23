// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

const longestCommonPrefix = (strs) => {
    if (strs.length === 0) {
        return ""
    }

    return strs.reduce((prefix, currentStr)=> {
        let i = 0;
        while (prefix[i] && prefix[i] === currentStr[i]){
            i++
        }
        return prefix.slice(0,i)
    });
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["cargo","carnivore","car"]))

