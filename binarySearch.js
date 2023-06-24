function binarySearch(arr, target){
    let start = 0;
    console.log("start:" + start)
    let end = arr.length - 1;
    console.log("end:" + end)

    while (start <= end){
        let mid = Math.floor((start + end) / 2);
        console.log("mid in while loop:" + mid)
        console.log("start in while loop:" + start)
        console.log("end in while loop:" + end)

        if (arr[mid] === target){
            console.log("mid in first if statement:" + mid)
            console.log("start in first if statement:" + start)
            console.log("end in first if statement:" + end)
            return mid;
        } else if (arr[mid] < target) {
            console.log("mid in else if statement:" + mid)
            console.log("start in else if statement:" + start)
            console.log("end in else if statement:" + end)
            start = mid + 1;
        } else {
            console.log("mid in else statement:" + mid)
            console.log("start in else statement:" + start)
            console.log("end in else statement:" + end)
            end = mid - 1;
        }
    }

    return -1;
}

const arr = [1, 5, 8, 9, 11, 13, 15, 19, 21]
const target = 9;
const result = binarySearch(arr, target)
console.log(result)