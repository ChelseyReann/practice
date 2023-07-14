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