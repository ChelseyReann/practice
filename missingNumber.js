/*
We're given an array of continuous numbers that should increment sequentially by 1, which just means that we expect a sequence like:
[1, 2, 3, 4, 5, 6, 7]

However, we notice that there are some missing numbers in the sequence.
[1, 2, 4, 5, 7]

Can you write a method missingNumbers that takes an array of continuous numbers and returns the missing integers?

Approach:
- create an empty results array
- loop through the array
- check if the next number is nums[i] + 1
- if not push nums[i] + 1 into the results array
- return the results array
*/