/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.
*/

let numbers = [2,7,11,15] //Output: [1,2]
let target = 9

let numbers2 = [2,3,4] //Output: [1,3]
let target2 = 6

let numbers3 = [-1,0] //Output: [1,2]
let target3 = -1