//Write a function that takes an array of integers as input and returns the maximum element in the array
//Example arr = [1, 3, 21, 5, 8, 90] -> 90

//set a variable equal to a number in the array
//iterate through the array.
//if the element we are iterating through is greater than the number we are storing - store that new higher number in that variable
//once the loop is done - return that variable

function maxElement(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

let arr = [1, 3, 21, 5, 8, 90];
console.log(maxElement(arr));
