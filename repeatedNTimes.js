/*
You are given an integer array nums with the following properties:

nums.length == 2 * n.
nums contains n + 1 unique elements.
Exactly one element of nums is repeated n times.
Return the element that is repeated n times.

Example 1:

Input: nums = [1,2,3,3]
Output: 3

Example 2:

Input: nums = [2,1,2,5,3,2]
Output: 2

Example 3:

Input: nums = [5,1,5,2,5,3,5,4]
Output: 5

Approach:
- create an empty freqMap
- add nums to the freqMap
- loop through freqMap and return where the number is repeated
*/

function repeatedNTimes(nums) {
    let freqMap = {}

    for(let i = 0; i < nums.length; i++){
        if(!freqMap[nums[i]]){
            freqMap[nums[i]] = 1
        } else {
            freqMap[nums[i]]++
        }
    }

    for(let num in freqMap){
        if(freqMap[num] >= 2){
            return parseInt(num)
        }
    }
};

let nums = [1,2,3,3]
let nums2 = [2,1,2,5,3,2]
let nums3 = [5,1,5,2,5,3,5,4]
console.log(repeatedNTimes(nums))
console.log(repeatedNTimes(nums2))
console.log(repeatedNTimes(nums3))
