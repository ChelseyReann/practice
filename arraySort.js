//Implement a function that sorts an array of integers in ascending or descending order. You can use any sorting algorithm such as bubble sort, insertion sort, or quicksort.

// function arrSort(arr){
//     let newArr = arr.sort((a,b) => a-b)
//     return newArr
// }

// let ar = [9, 2, 13, 20]
// console.log(arrSort(arr))

function removeDups(arr){
    let freqMap = {}
    let results = []

    for(let i = 0; i < arr.length; i++){
        if(!freqMap[arr[i]]){
            freqMap[arr[i]] = 1
        } else {
            freqMap[arr[i]]++
        }
    }

    for(let num in freqMap){
        if(freqMap[num] === 1){
            results.push(num)
        }
    }

    return results
}

let arr = [9, 2, 13, 9, 20]
console.log(removeDups(arr))