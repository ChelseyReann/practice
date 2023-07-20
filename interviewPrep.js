/*   
STRDLE - Fellowship Programming question
We will implement a totally original word game. A user will guess a 5 letter string and depending on the accuracy of the guess we will return whether:

the letter is in the right position (Green)
the letter exists in the solution but is not in the right position (Yellow)
the letter does not exist in the solution (Gray)
Conditions:

Unlike the more popular word game, the words do not have to be valid English words.
The input solutions and guesses will always be 5 letters long, bonus if the candidate comes up with some validation for this condition.
*/

/*
Step 1: Return characters that match the solution (Green)
Given two string inputs (solution, guess), return the index of the letters within the guess that matches the solution.

Example
Solution: HELLO
Guess: HELPS

Will return [0, 1, 2]
*/

function getMatch(solution, guess) {
  /* Approach:
    - create empty results array
    - for loop to loop through str
    - str1[i] === str2[i]
    - results.push(i)
    - return results
    */

  let results = [];

  for (let i = 0; i < solution.length; i++) {
    if (solution[i] === guess[i]) {
      results.push(i);
    }
  }
  return results;
}

/*
Step 2: Return characters that are in the solution but not in the right place (Yellow)
Given two string inputs (solution, guess), return the index of the letters within the guess that exists anywhere within the solution BUT not matching the correct index.

Example
Solution: HELLO
Guess: LEGOS

Will return [0, 3]

Note: 1 is not returned because it would match exactly.
*/

function getContains(solution, guess) {
  /*
    - create an empty results array
    - create an empty freqMap
    - use a for loop - loop through the solution
    - store the solution char's in my freqMap
    - use for loop - loop through the guess
    - check that the char in guess exist in freqMap && solution[i] !== guess[i]
    - results.push(i)
    - return the results
    */
  let results = [];
  let freqMap = {};

  for (let i = 0; i < solution.length; i++) {
    if (!freqMap[solution[i]]) {
      freqMap[solution[i]] = true;
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (freqMap[guess[i]] && solution[i] !== guess[i]) {
      results.push(i);
    }
  }
  return results;
}

console.log(getColor("HELLO", "LEGOS"));

function getColor(solution, guess) {
  // Hello, legos

  // getContains() == [0, 3] all yellows
  // let yellows = getcontains()
  // grey is default
  // green[i] should be green

  let yellow = getContains(solution, guess);
  let green = getMatch(solution, guess);

  let result = ["grey", "grey", "grey", "grey", "grey"];

  for (let i = 0; i < yellow.length; i++) {
    result[yellow[i]] = "yellow";
  }

  for (let i = 0; i < green.length; i++) {
    result[green[i]] = "green";
  }

  //  for(let i = 0; i < solution.length; i++){
  //   if(!freqMap[solution[i]]){
  //     freqMap[solution[i]] = true
  //   }
  //  }

  //  for (let i = 0; i < guess.length; i++){
  //   if(!freqMap[guess[i]] && solution[i] !== guess[i]){
  //     results.push("grey")
  //   }
  //  }
  return result;
}
