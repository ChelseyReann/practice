//Implement a function that sorts an array of integers in ascending or descending order. You can use any sorting algorithm such as bubble sort, insertion sort, or quicksort.

function arrSort(arr){
    let newArr = arr.sort((a,b) => a-b)
    return newArr
}

let arr1 = [9, 2, 13, 20]
console.log(arrSort(arr1))
//Time complexity - O(n log n) - n is the number of elements in the array. as the size of the array increases, the time taken to sort the array grows proportionally
//Space complexity - O(N) - n is number of elements of in the array

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

//Time complexity - O(N)
//Space complexity - O(K) - number of unique elements in the freqMap