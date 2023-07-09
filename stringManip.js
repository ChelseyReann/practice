/* 
Write a function that takes two strings as input and returns the number of characters that match at the same positions.
Example Input: "hello", "hills"
Example Output: 3

Approach:
create a counter variable and set it to zero
create a freqMap and map characters from str1 & str 2
loop through the freqMap and for every char that equals 0 add 1 to the counter
return the counter

because of the double 'l' the freqMap will not work - don't know hoe to differenciate letter that are duplicates yet so implemented a counter and a simple for loop instead
*/

