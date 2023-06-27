//Given 2 arrays, find the intersection (items that occur in both arrays). Not that the arrays are not sorted and may have duplicates. You can modify the arrays. You can return the items in any order but they cannot contain duplicates.

function getIntersection(arr1, arr2){
    let results = []
    let freqMap = {}

    for (let i = 0; i < arr1.length; i++){
        if(!freqMap[arr1[i]]){
            freqMap[arr1[i]] = 1
        } else {
            freqMap[arr1[i]]++
        }
    }

    for (let i = 0; i < arr2.length; i++){
        if(freqMap[arr2[i]]){
            results.push(arr2[i])
            freqMap[arr2[i]]--
        }
    }

    return results
}

let arr1 = [1,4,6,7,8,6,9]
let arr2 = [2,4,5,9,8]
console.log(getIntersection(arr1, arr2))
//[4,8,9]

//Time complexity - O(N*M)
//space complexity - O(N)