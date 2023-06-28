//Imagine we have an image. We'll represent this image as a simple 2D array where every pixel is a 1 or a 0. The image you get is known to have a single rectangle of 0s on a background of 1s.

// Write a function that takes in the image and returns one of the following representations of the rectangle of 0's: top-left coordinate and bottom-right coordinate OR top-left coordinate, width, and height.

function findRectangle(array){ 
    let target = 0; 
    let results = [];
    for(let i = 0; i < array.length; i++){ 
      for(let j = 0; j < array[i].length; j++){ 
        if(array[i][j] === target){ 
        results.push([i,j]);
      }
    }
    }
    return [results[0], results[results.length-1]];
  }

  const image1 = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ];
  console.log(findRectangle(image1));  // [2,3]  row, column
  
  const image2 = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0],
  ];
  console.log(findRectangle(image2));  // [4,6]  row, column
  
  const image3 = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 0, 0],
  ];
  console.log(findRectangle(image3));  // [3,5]  row, column
  
  const image4 = [
    [0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ];
  console.log(findRectangle(image4));  // [0,0]  row, column
  
  const image5 = [
    [0],
  ];
  console.log(findRectangle(image5));  // [0,0]  row, column
//Expected output:
[ [ 2, 3 ], [ 3, 5 ] ]
[ [ 4, 6 ], [ 4, 6 ] ]
[ [ 3, 5 ], [ 4, 6 ] ]
[ [ 0, 0 ], [ 0, 0 ] ]
[ [ 0, 0 ], [ 0, 0 ] ]