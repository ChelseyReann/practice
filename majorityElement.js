/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */

function majorityElement(nums){
    let freqMap = {}

    if(nums.length === 1) return nums[0]

    for(let i = 0; i < nums.length; i++){
        if(!freqMap[nums[i]]){
            freqMap[nums[i]] = 1
        } else {
            freqMap[nums[i]]++
            if(freqMapnums[i] > nums.length / 2){
                return nums[i]
            }
        }
    }
}