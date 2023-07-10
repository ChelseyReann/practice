/* 
Create a function that takes a list of integers and returns the indices of all even numbers in the list.

Example Input: [1, 2, 3, 4, 5, 6]
Example Output: [1, 3, 5]

Approach:
- create an empty results array
- loop through the array
- check if the number is divisible by 2, if yes push that index into the results array
- return results array
*/
function findIndex(arr){
    let results = []

    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            results.push(i)
        }
    }
    return results
}

let arr = [1, 2, 3, 4, 5, 6]
console.log(findIndex(arr))

//time complexity - O(N)
//space complexity - O(N)

/*
Write a function that accepts two arrays and returns the number of common elements between them. The function should compare the elements at the same index in both arrays and count the number of matches.

Example Input: 
arr1 = [1,2,5,8,10]
arr2 = [0,2,5,9,11]

Example Output:
2

Approach:
 - create a count variable
 - create a for loop and check if each index is equal if yes count++
 - return count
*/

function indexMatch(arr1, arr2){
    let count = 0

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] === arr2[i]){
            count++
        }
    }
    return count
}

let arr1 = [1,2,5,8,10]
let arr2 = [0,2,5,9,11]
console.log(indexMatch(arr1, arr2))
//Time complexity - O(N)
//Space complexity - O(1)




