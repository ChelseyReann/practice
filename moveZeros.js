/* 
Write a method that moves all zeros in an array to its end. You should maintain the order of all other elements. Here's an example:

zerosToEnd([1, 0, 2, 0, 4, 0])
// [1, 2, 4, 0, 0, 0]

Approach:
- two pointers method
- while start < end
- if nums[start] === 0
- make nums[start] = nums[end]
- increment start and decrement end
- return array
*/

function moveZero(nums){
    let start = 0
    let end = nums.length - 1

    while (start < end){
        let current = nums[start]
        if(nums[start] === 0){
            nums[start] = nums[end]
            nums[end] = current
            start++
            end--
        } else {
            start++
            end--
        }
    }
    return nums

}

let nums = [1, 0, 2, 0, 4, 0]
console.log(moveZero(nums))
//Time complexity - O(N)
//Space complexity - O(1)