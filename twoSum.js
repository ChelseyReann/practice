//Leet Code Practice

// 1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// const twoSum = (nums, target) => {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
//     return []
// }

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

//How this method works:
// 1. Start with the first number in the array and compare it with all the remaining numbers in the array.
// 2. For each comparison, check if the sum of the current number and the number being compared is equal to the target.
// 3. If a pair is found where the sum equals the target, return the indices of the two numbers.
// 4. If no pair is found after checking all possible combinations, return an empty array to indicate that there are no indices that satisfy the given conditions.


//if you want to just return the number and not the indices see below
const twoSum = (arr, targetSum) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                return [arr[i], arr[j]]
            }
        }
    }

    return []
}

const arr = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 10
const result = twoSum(arr, targetSum)
console.log(result)

// const arr = [3, 7, -3, 11, -1, 1, 9]
// const targetSum = 10
// const result = twoSum(arr, targetSum)
// console.log(result)