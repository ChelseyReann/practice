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


const playerBoard1 = ["-", "-", "P", "-", "-", "-"];
console.log(playerPosition(playerBoard1)); // returns 2

const playerBoard2 = ["P", "-", "-"];
console.log(playerPosition(playerBoard2)); // returns 0

const playerBoard3 = ["-", "-", "-", "P"];
console.log(playerPosition(playerBoard3)); // returns 3

const playerBoard4 = ["P"];
console.log(playerPosition(playerBoard4)); // returns 0 


function playerPosition(arr){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === "P"){
        return i
      }
    }
  }

//time complexity - O(N)
//space complexity - O(1)
  