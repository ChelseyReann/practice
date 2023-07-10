/* 
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

approach:
- create a freqMap
- loop through the ransomNote and add it to the freqMap
- loop through the magazine and decrease it's chars from the freqMap
- loop through the freqMap and if the count of each character is more than 0 then return false
- other wise return true
*/