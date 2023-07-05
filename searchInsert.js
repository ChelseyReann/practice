/*Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.*/

/*Approach:
- Intialize two pointers, left and right which represent the start and end of the array
- while left is less than or equal to right perform the following steps:
    - calulate the mid point
    - compare the value at the mid point to the target
        - if the mid point is equal to the target return the mid point
        - if the mid point is less than the target update left to mid + 1
        - if the mid point is less than the target update right to mid - 1
- if the loop exits without finding the target, return the left index as the position where the target should be inserted        
*/

function searchInsert(nums, target){
    let left = 0;
    let right = nums.length - 1

    while(left <= right){
        const mid = Math.floor((left + right) / 2)

        if(nums[mid] === target){
            return mid
        } else if (nums[mid] < target){
            left = mid + 1
        } else {
            right = mid -1
        }
    }

    return left
}

//Time complexity - O(log n)
//Space complexity - O(1)

function search(nums, target){
    for (let i = 0; i < nums.length; i++){
        if(nums.includes(target)){
            return nums.indexOf(target)
        } else {
            nums.push(target)
            nums.sort((a,b) => a-b)
            return nums.indexOf(target)
        }
    }
}