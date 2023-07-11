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
  
  console.log(course_position(schedule1, "Linear Algebra"));
  console.log(course_position(schedule1, "Art History"));
  console.log(course_position(schedule1, "Political Science"));
  console.log(course_position(schedule1, "Economics"));
  console.log(course_position(schedule2, "Political Science"));
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

function course_position(arr) {
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    if (!results.includes(arr[i][0])) {
      results.push(arr[i][0]);
    }
  }
  return results;
}

console.log(course_position(enrollments1));
//Time complexity - O(N^2)
//Space complexity - O(N)


