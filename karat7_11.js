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

