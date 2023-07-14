/*
We're given an array of continuous numbers that should increment sequentially by 1, which just means that we expect a sequence like:
[1, 2, 3, 4, 5, 6, 7]

However, we notice that there are some missing numbers in the sequence.
[1, 2, 4, 5, 7]

Can you write a method missingNumbers that takes an array of continuous numbers and returns the missing integers?

Approach:
- create an empty results array
- loop through the array
- need a nested for loop?
- check if the next number is nums[i] + 1
- if not push nums[i] + 1 into the results array
- return the results array
*/

function missingNums(nums){
    let results = []

    for(let i = 0; i < nums.length; i++){
            if(nums[i + 1] !== nums[i] + 1){
                let current = nums[i] + 1
                results.push(current)
            } 
            if(nums[i + 1] === nums[nums.length - 1]){
                break
            }
        
    }
    return results
}

let nums = [1,2,4,5,7]
let nums2 = [3,5,7,9]//[4,6,8]
console.log(missingNums(nums))
console.log(missingNums(nums2))