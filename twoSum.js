//Leet Code Practice

// 1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return []
}

// const nums = [2, 7, 11, 15]
// const target = 9
// const result = twoSum(nums, target)
// console.log(result)

// const nums = [3, 2, 4]
// const target = 6
// const result = twoSum(nums, target)
// console.log(result)

// const nums = [3, 3]
// const target = 6
// const result = twoSum(nums, target)
// console.log(result)