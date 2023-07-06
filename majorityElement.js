/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Approach:
create a freqMap
create test case if nums only contains 1 element return that element
iterate through the array
store the number we are iterating through in the freqMap if it doesn't already exist and increase it's count if it does already exist
return the element that has the highest frequency
 */

function majorityElement(nums){
    let freqMap = {}

    if(nums.length === 1) return nums[0]

    for(let i = 0; i < nums.length; i++){
        if(!freqMap[nums[i]]){
            freqMap[nums[i]] = 1
        } else {
            freqMap[nums[i]]++
            if(freqMap[nums[i]] > nums.length / 2){
                return nums[i]
            }
        }
    }
}

let nums = [3,2,3]
let nums2 = [2,2,1,1,1,2,2]
let nums3 = [1]
console.log(majorityElement(nums))
console.log(majorityElement(nums2))
console.log(majorityElement(nums3))

//Time Complexity - O(N)
//Space Complexity - O(N)