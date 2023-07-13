/*
You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

Approach:
- create empty freqMap
- loop through the names array and add the names in with their heights as the values

- create results array
- loop through names array
- if names[i]
*/
function sortPeople(names, heights) {
  let results = [];

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      if (heights[i] < heights[j]) {
        [names[i], names[j]] = [names[j], names[i]];
        [heights[i], heights[j]] = [heights[j], heights[i]];
      }
    }
    results.push(names[i]);
  }
  return results;
}

let names = ["Mary", "John", "Emma"];
let heights = [180, 165, 170];
console.log(sortPeople(names, heights));
