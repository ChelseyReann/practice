//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
//Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
//Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
//Return k.

function removeDupes(nums){
    const mySet = new Set(nums)
    const unique = [...mySet]
    return unique
}
let nums = [1, 1, 2]
let nums2 = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDupes(nums))
console.log(removeDupes(nums2))
//Time complexity - O(N)
//Space complexity - O(N)

function removeDuplicates(nums){
    let freqMap = {}
    let results = []

    for (let i = 0; i < nums.length; i++){
        if(!freqMap[nums[i]]){
            results.push(nums[i])
        }
        freqMap[nums[i]] = true
    }
    return results
}

//Time complexity - O(N) - N = number of elements in the nums array that we are iterating through
//Space complexity - O(N) - creating a new freqmap and results array. taking up new space in memory

// const removeDuplicates = (nums) => {
//     let k = 0; //O(1)
//     for(let i = 1; i < nums.length; i++) { //O(n)
//         console.log("in the for loop:" + i, k) //O(n)
//         if(nums[i] !== nums[k]) { //O(n)
//             console.log("in the if conditional:" + i, k)
//             k++; //O(1)
//             console.log("after k++:" + i, k)
//             nums[k] = nums[i] //O(1)
//             console.log("at nums[k] = nums[i]:" + i, k)
//         }
//     }
//     return k + 1; //O(1)
// }

//time complexity O(n)

// console.log(removeDuplicates([1, 1, 2]))
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
