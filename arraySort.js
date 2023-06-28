//Implement a function that sorts an array of integers in ascending or descending order. You can use any sorting algorithm such as bubble sort, insertion sort, or quicksort.

function arrSort(arr){
    let newArr = arr.sort((a,b) => a-b)
    return newArr
}

let arr = [9, 2, 13, 20]
console.log(arrSort(arr))