/*
Imagine we are building a computer game in which a player must avoid running into monsters. Our first step is to determine the location of the player on the game board.

Write a function that takes a board, and returns the index of the player.

Board constraints:
 - The board is a list of characters
 - An empty space on the board is denoted by a dash: '-'
 - The player is denoted by the letter 'P'

Sample input and output:
board1 = ['-', '-', 'P', '-', '-', '-'] => 2
board2 = ['P', '-', '-'] => 0
board3 = ['-', '-', '-', 'P'] => 3
board4 = ['P'] => 0

For this question, you cannot call built-in search functions like index() or indexOf().

Complexity Analysis variable:
n = number of spaces in the board
*/

function playerPosition(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "P") {
      return i;
    }
  }
}

// const playerBoard1 = ["-", "-", "P", "-", "-", "-"];
// console.log(playerPosition(playerBoard1)); // returns 2

// const playerBoard2 = ["P", "-", "-"];
// console.log(playerPosition(playerBoard2)); // returns 0

// const playerBoard3 = ["-", "-", "-", "P"];
// console.log(playerPosition(playerBoard3)); // returns 3

// const playerBoard4 = ["P"];
// console.log(playerPosition(playerBoard4)); // returns 0 

//time complexity - O(N)
//space complexity - O(1)

/*
Let's make this game more interesting by adding a monster to the board, denoted by the letter 'M'

The board is still a list of characters, with exactly one player, 'P', and one monster, 'M'.

Write a function that takes a board, and returns the number of spaces (represented by dashes '-' on the board) between the player and the monster.

Sample input and output:
board1 = ['-', 'P', '-', '-', 'M', '-'] => 2
board2 = ['-', 'M', '-', '-', 'P', '-'] => 2
board3 = ['M', '-', '-', '-', 'P'] => 3
board4 = ['P', 'M'] => 0

For this question, you cannot call built-in search functions like index() or indexOf().

Complexity Analysis variable:
n = number of spaces in the board

Approach:
- use a count variable = 0
- use a for loop to loop through the array
- if arr[i] === "P" || arr[i] === "M"
- 
*/

function distance(arr) {
  let count = 0;
  let inBetween = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "P" || arr[i] === "M") {
      inBetween = !inBetween;
    }
    if (arr[i] === "-" && inBetween) {
      count++;
    }
  }
  return count;
}

const distanceBoard1 = ["-", "P", "-", "-", "M", "-"];
console.log(distance(distanceBoard1)); // returns 2

const distanceBoard2 = ["-", "M", "-", "-", "P", "-"];
console.log(distance(distanceBoard2)); // returns 2

const distanceBoard3 = ["M", "-", "-", "-", "P"];
console.log(distance(distanceBoard3)); // returns 3

const distanceBoard4 = ["P", "M"];
console.log(distance(distanceBoard4)); // returns 0

//time complexity - O(N)
//Space complexity - O(1)

/*
Our user research team has discovered that two-dimensional games are all the rage; it's time to upgrade!

New board constraints:
 - The board is a two-dimensional grid of characters
 - An empty space on the board is denoted by a dash '-'
 - The player is denoted by the letter 'P'
 - Monsters are denoted by the letter 'M'

Write a function that takes a two-dimensional board, and returns the location of the player.

For the location you can define whatever coordinate system works for you. A standard approach is to define the top-left corner of the board as (0,0), and give coordinates in (row,column) order.

Sample input and output:

board1 = [
  ['-', '-', '-', '-', '-', '-'],
  ['-', '-', 'M', '-', 'M', '-'],
  ['-', '-', '-', 'P', '-', '-'],
  ['M', '-', '-', 'M', '-', '-'],
  ['-', 'M', '-', '-', '-', '-'],
]
Expected Output (in any format): 
(2,3)

board2 = [
  ['P', '-', '-', '-', '-', '-'],
  ['-', '-', 'M', '-', 'M', '-'],
  ['-', '-', '-', '-', '-', '-'],
  ['M', '-', '-', 'M', '-', '-'],
  ['-', 'M', '-', '-', '-', '-'],
]
Expected Output (in any format): 
(0,0)

board3 = [
  ['M', '-', 'M'],
  ['M', '-', 'P'],
]
Expected Output (in any format): 
(1,2)

Complexity Analysis variables:
n = number of rows
m = number of columns
*/


function player_position(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[0].length; j++){
            if(arr[i][j] === "P"){
                return [i, j]
            }
        }
    }
}


const board1 = [
    ["-", "-", "-", "-", "-", "-"],
    ["-", "-", "M", "-", "M", "-"],
    ["-", "-", "-", "P", "-", "-"],
    ["M", "-", "-", "M", "-", "-"],
    ["-", "M", "-", "-", "-", "-"],
  ];
  console.log(player_position(board1)); // returns 2,3
  
  const board2 = [
    ["P", "-", "-", "-", "-", "-"],
    ["-", "-", "M", "-", "M", "-"],
    ["-", "-", "-", "-", "-", "-"],
    ["M", "-", "-", "M", "-", "-"],
    ["-", "M", "-", "-", "-", "-"],
  ];
  console.log(player_position(board2)); // returns 0,0
  
  const board3 = [
    ["M", "-", "M"],
    ["M", "-", "P"],
  ];
  console.log(player_position(board3)); // returns 1,2 