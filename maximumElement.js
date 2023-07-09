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


//check if number is less than max but greater than all other elements arr[i] < max && arr[i] > second
function secondHighestElement(arr) {
    let max = arr[0];
    let second = arr[1]
    
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        second = max;
        max = arr[i];
        console.log("max: " + max)
        console.log("second: " + second)
      } else if(arr[i] < max && arr[i] > second){
        second = arr[i]
        console.log("else if second: " + second)
      }
    }
  
    return second;
  }

let arr = [1, 3, 21, 5, 8, 90];
console.log(maxElement(arr));
console.log(secondHighestElement(arr))
