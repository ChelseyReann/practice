//Write a function that takes a non empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.
//sample Input: array = [1, 2, 3, 5, 6, 8, 9]
//sample Output: [1, 4, 9, 25, 36, 64, 81]

// function sortedSquareArray(array) {
//     let square;
//     let ans = [];

//     for (let i = 0; i < array.length; i++){
//         square = array[i] * array[i];
//         ans.push(square)
//     }
//     return ans
// }

function sortedSquareArray(array) {
    let square;
    let ans = [];

    for (let i = 0; i < array.length; i++){
        //proper syntax with squaring
        square = array[i] ** 2;
        ans.push(square)
    }
    return ans
}

console.log(sortedSquareArray([1, 2, 3, 5, 6, 8, 9]))