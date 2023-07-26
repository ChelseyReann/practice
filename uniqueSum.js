/*
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums

Approach:
- create an empty freqMap
- create a sum variable set it equal to 0
- loop through nums storing nums in the freqMap
- loop through freqMap seeing where the nums === 1
- add parseInt(num) to sum
- return sum
*/


