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




