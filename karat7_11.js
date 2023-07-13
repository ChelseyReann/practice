/*
Write a function that will take an array and an target and find the index of where the target appears in the array
*/

const schedule1 = [
    "Linear Algebra",
    "Art History",
    "Political Science",
    "Economics",
  ];
  
  const schedule2 = ["Political Science"];
  
  function course_position(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return [i];
      }
    }
  }
  
//   console.log(course_position(schedule1, "Linear Algebra"));
//   console.log(course_position(schedule1, "Art History"));
//   console.log(course_position(schedule1, "Political Science"));
//   console.log(course_position(schedule1, "Economics"));
//   console.log(course_position(schedule2, "Political Science"));
//Time complexity - O(N)
//Space complexity - O(1)

  
//Write a function that will print out all the student ID's from the array with no duplicates

const enrollments1 = [
    ["58", "Linear Algebra"],
    ["94", "Art History"],
    ["94", "Operating Systems"],
    ["17", "Software Design"],
    ["58", "Mechanics"],
    ["58", "Economics"],
    ["17", "Linear Algebra"],
    ["17", "Political Science"],
    ["94", "Economics"],
    ["25", "Economics"],
    ["58", "Software Design"]
  ];

// function course_position(arr) {
//   let results = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!results.includes(arr[i][0])) {
//       results.push(arr[i][0]);
//     }
//   }
//   return results;
// }

// console.log(course_position(enrollments1));
//Time complexity - O(N^2)
//Space complexity - O(N)


/*
An activity at our university requires students to work in pairs. Given a list of student ID number, course name pairs, write a function that returns a collection of all possible pairs of student ID numbers.

Sample input and output:

enrollments1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
]

Expected output: [
  "58,17", 
  "58,94",
  "58,25",
  "94,25",
  "17,94",
  "17,25"
]

enrollments2 = [
  ["0", "Advanced Mechanics"],
  ["0", "Art History"],
  ["1", "Course 1"],
  ["1", "Course 2"],
  ["0", "Computer Architecture"],
]

Expected output: [
  "0,1"
]
*/

const enrollments = [
    ["58", "Linear Algebra"],
    ["94", "Art History"],
    ["94", "Operating Systems"],
    ["17", "Software Design"],
    ["58", "Mechanics"],
    ["58", "Economics"],
    ["17", "Linear Algebra"],
    ["17", "Political Science"],
    ["94", "Economics"],
    ["25", "Economics"],
    ["58", "Software Design"],
  ];
  
  const enrollments2 = [
    ["0", "Advanced Mechanics"],
    ["0", "Art History"],
    ["1", "Course 1"],
    ["1", "Course 2"],
    ["0", "Computer Architecture"],
  ];
  
  function course_position(arr){
    let results = []
    let freqMap = {}

    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            let pair = [arr[i][0], arr[j][0]].sort()
            let joinedPair = pair.join(",")
            if(!freqMap[joinedPair] && arr[i][0] !== arr[j][0]){
                freqMap[joinedPair] = true
                results.push(pair)
            }
        }
    }
    return results
  }
  
//   console.log(course_position(enrollments))
//   console.log(course_position(enrollments2));

//Time complexity - O(N^2)
//Space complexity - O(N^2)

function coursePosition(arr){
    const pairsMap = new Map

    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            let student1ID = arr[i][0]
            let student2ID = arr[j][0]

            if(student1ID !== student2ID){
                let pair = [student1ID, student2ID]
                let sortedPair = pair.sort().join(",")
                pairsMap.set(sortedPair, true)
            }
        }
    }
    return Array.from(pairsMap.keys())
}
//Time complexity - O(N^2)
//Space complexity - O(N^2)

function findPairs(arr){
    let onlyNums = []
    let onlyPairs = []

    for(let i = 0; i < arr.length; i++){
        onlyNums.push(arr[i][0])
    }
    console.log("onlyNums: " + onlyNums)

    let unique = [...new Set(onlyNums)]
    console.log("unique: " + unique)

    for(let i = 0; i < unique.length; i++){
        for(let j = i + 1; j < unique.length; j++){
            onlyPairs.push(unique[i] + ', ' + unique[j])
        }
    }
    return onlyPairs
}

console.log(findPairs(enrollments))
//Time complexity - O(N^2)
//Space complexity - O(N)
