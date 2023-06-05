// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

let containsDuplicate = function(nums) {
    let len = nums.length
    for (let i = 0; i < len; i++){
        for (let j = i + 1; j < len; j++){
            if (nums[i] === nums[j]) {
                return true
            }
        }
    }
    return false
}

console.log(containsDuplicate([1,2,3,1]))