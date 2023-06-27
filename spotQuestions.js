//Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.
function closestToZero(nums){
    //if the nums array has no values in it then return 0
    if(!nums.length){
        return 0
    }

    //intitalizing a variable that is equal to the first number in the array
    let closest = nums[0];
    // console.log("before the for loop, closest is: " + closest)

    //creating a for loop to go through all of the values in the array
    for (let i = 0; i < nums.length; i++){
        // console.log("in the for loop, closest is: " + nums[i])
        //if the absolute value of the number I'm iterating through is less than the absolute value of the closest variable OR the absolute value of the number I'm iterating through is equal to the absolute value of the closest variable and that number is greater than the closest varible
        if(Math.abs(nums[i]) < Math.abs(closest) || (Math.abs(nums[i]) === Math.abs(closest) && nums[i] > closest)){
            // console.log("before storing a new integer closest is: " + closest)
            //I now want to store that number I'm iterating through to be the closest variable
            closest = nums[i]
            // console.log("after the if conditional, closest is: " + closest)
        }
    }
    //return the closest variable
    return closest
}

let nums = [-4, -2, 1, 4, 8]
console.log(closestToZero(nums))
//Time complexity - O(N) this function loops through a single array once
//Space complexity - O(1) - not creating anything new to take up space in memory

//Given an array of integers (numbers) return the two integers that equal the target(k). If no pair is found, return [0,0]
//iterate through the numbers twice, once at zero and once at i + 1, see if those values = k and if yes return i & j otherwise return [0,0]
function findTarget(numbers, k){
    for (let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === k){
                return [i, j]
            }
        }
    }
    return [0,0]
}

let numbers = [2,5,5,7]
let k = 10
console.log(findTarget(numbers, k))

//Time complexity of this function is O(N) - although it is 2 for loops they are looping through the same array twice and the number of iterations grows linearly
//Space complexity for this function is O(1) - not creating anything new in memory for it to take up space.

//Implement the function filterDuplicates(data) that takes a data array as input and returns an array containing the values of data without the duplicates. The intital order of the values must be kept. 
//Example Input: [7, 6, 4, 3, 3, 4, 9]
//Example Output: [7, 6, 4, 3, 9]

//function I gave as an example:
function filterDuplicates(data){
    let results = [];

    for(let i = 0; i < data.length; i++){
        if(!results.includes(data[i])){
            results.push(data[i])
        }
    }
    return results;
}
//Time complexity - O(N^2) - iterating throught the results array twice with .includes but I have a way to fix this! create a hash map which I do below!
//Space complexity - O(N) - creating a new array to keep track of values takes up space linearly

//revised function
function filterDuplicates(data){
    let freqMap = {}
    let results = []

    for(let i = 0; i < data.length; i++){
        let current = data[i]
        if(!freqMap[current]){
            freqMap[current] = true;
            results.push(current)
        }
    }
    return results
}

let data = [7, 6, 4, 3, 3, 4, 9]
console.log(filterDuplicates(data))
//Time complexity - O(N) - we iterate through the array once in the for loop
//Space complexity- O(k) - k represents the number of unique elements stored in the freqMap