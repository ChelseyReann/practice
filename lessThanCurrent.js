/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

Approach:
 - create an empty results array
 - create a for loop and loop through nums array
 - nested for loop to compare nums
 - if nums[i] > nums[j]
 - counter variable
 - counter++
 - results.push(counter)
 -return results outside of the loop
*/

function lessThanCurrent(nums){
    let results = []

    for(let i =0; i < nums.length; i++){
        let counter = 0
        for(let j = 0; j < nums.length; j++){
            if(nums[i] > nums[j]){
                counter++
            }
        }
        results.push(counter)
    }
    return results
}

let nums = [8,1,2,2,3] //[4,0,1,1,3]
let nums2 = [6,5,4,8] //[2,1,0,3]
let nums3 = [7,7,7,7] //[0,0,0,0]
console.log(lessThanCurrent(nums))
console.log(lessThanCurrent(nums2))
console.log(lessThanCurrent(nums3))