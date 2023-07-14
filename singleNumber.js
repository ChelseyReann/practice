//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with linear runtime complexity and use only constant extra space.

function singleNumber(nums){
    let result = 0
    for(let num of nums){
        result ^= num;
    }
    return result
}

let nums = [4,1,2,1,2]
console.log(singleNumber(nums))
//Time complexity - O(N)
//Space complexity - O(1)

const singleInt = (numbers) => {
    let freqMap = {}

    for(let i = 0; i < numbers.length; i++){
        if(!freqMap[numbers[i]]){
            freqMap[numbers[i]] = 1
        } else {
            freqMap[numbers[i]]++
        }
    }

    for(let num in freqMap){
        if(freqMap[num] === 1){
            return num
        }
    }
}

let numbers = [2, 2, 1]
console.log(singleInt(numbers))

function unique(nums){
    let unique = [...new Set (nums)]
    return unique
}

console.log(unique(nums))
//time complexity - O(N)
//space compplexity - O(N)