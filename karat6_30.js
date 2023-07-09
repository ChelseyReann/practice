/*
We have a record of who entered a building in what order in the form of a list of names and want to find out what position a specific person entered in. Write a function that takes in this list and a specific name as inputs and returns the index of that person in the list.

For this question, you cannot call built-in search functions like index() or indexOf().

Sample input and output:

records1 = ["Martha", "Paul", "Steve", "Jennifer"]
records2 = ["Jennifer"]

name_order(records1, "Martha") => 0
name_order(records1, "Paul") => 1
name_order(records1, "Steve") => 2
name_order(records1, "Jennifer") => 3
name_order(records2, "Jennifer") => 0

Complexity Discussion:
n: the number of names in the list
*/

// const records1 = ["Martha", "Paul", "Steve", "Jennifer"];
const records2 = ["Jennifer"];

function name_order(arr, name){
  for(let i = 0; i < arr.length; i++){
    if(name === arr[i]){
      return i
    }
  }
}

//Time complexity - O(N)
//Space complexity - O(1)

/* We have an array and want to get back just the names of the employees that were in the building - no duplicates
*/
let records1 = [
  ["Martha",   "enter"],
  ["Paul",     "enter"],
  ["Martha",   "exit"],
  ["Steve",    "enter"],
  ["Jennifer", "enter"],
  ["Curtis",   "enter"],
  ["Paul",     "exit"],
  ["Martha",   "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "exit"],
  ["Curtis",   "exit"],
  ["Paul",     "enter"],
  ["Paul",     "exit"], 
  ["Curtis",   "enter"]
]



function name_order(arr){
    let results = []
    
    for(let i = 0; i < arr.length; i++){
      if(!results.includes((arr[i][0]))){
        results.push(arr[i][0])
      }
    }
    return results
  }
  
  console.log(name_order(records1))

  function nameOrder(arr){
    let results = []
    let freqMap = {}

    for(let i = 0; i < arr.length; i++){
        if(!freqMap[arr[i][0]]){
            freqMap[arr[i][0]] = 1
            console.log(freqMap)
        }
    }

    for (let name in freqMap){
        if(freqMap[name]){
            console.log(freqMap[name])
            results.push(name)

        }
    }
    return results
  }

  console.log(nameOrder(records1))

  //Time complexity - O(N^2)
  //Space complexity - O(N)

  /*
Given a list of ordered entry and exit records, write a function that returns a list of all the people still remaining in the building at the end of the record (who entered and did not exit).

Sample input and output:

records1 = [
  ["Martha",   "enter"],
  ["Paul",     "enter"],
  ["Martha",   "exit"],
  ["Steve",    "enter"],
  ["Jennifer", "enter"],
  ["Curtis",   "enter"],
  ["Paul",     "exit"],
  ["Martha",   "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "exit"],
  ["Curtis",   "exit"],
  ["Paul",     "enter"],
  ["Paul",     "exit"], 
  ["Curtis",   "enter"]
]

Expected output: ["Steve", "Curtis"]

records2 = [
  ["Jennifer", "enter"],  
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Jennifer", "exit"]
]

Expected output: []

Complexity Discussion:
n: the length of the records array

*/

function nameOrder(arr){
    let results = []
    let freqMap = {}

    for(let i = 0; i < arr.length; i++){
        if(!freqMap[arr[i][0]]){
            freqMap[arr[i][0]] = 1
        } else {
            freqMap[arr[i][0]]++
        }
    }

    for (let name in freqMap){
        if(freqMap[name] % 2 !== 0){
            results.push(name)

        }
    }
    return results
  }