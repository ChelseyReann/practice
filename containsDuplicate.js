// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// let containsDuplicate = function(nums) {
//     let len = nums.length
//     for (let i = 0; i < len; i++){
//         for (let j = i + 1; j < len; j++){
//             if (nums[i] === nums[j]) {
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(containsDuplicate([1,2,3,1]))

// let containsDuplicate = function(nums) {
//     let countMap = {}
//     let len = nums.length
//     for (let num of nums) {
//         if (countMap[num]) {
//             return true
//         }
//         countMap[num] = 1
//     }
//     return false
// }


// function containsDuplicate(nums){
//     let freqMap = {}

//     for (let i = 0; i < nums.length; i++){
//         if(freqMap[nums[i]]){
//             return true
//         }
//         freqMap[nums[i]] = true
//     }
//     return false
// }



function containsDupe(nums){
    let freqMap = {}
  
    for (let i = 0; i < nums.length; i++){
      if(!freqMap[nums[i]]){
        freqMap[nums[i]] = 1
      } else {
        freqMap[nums[i]]++
        return true
      }
    }
    return false
  }

  let nums = [1,2,3,1]
console.log(containsDupe(nums))
//Time complexity - O(N)
//Space complexity - O(N)