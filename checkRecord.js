/* 
You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

'A': Absent.
'L': Late.
'P': Present.
The student is eligible for an attendance award if they meet both of the following criteria:

The student was absent ('A') for strictly fewer than 2 days total.
The student was never late ('L') for 3 or more consecutive days.
Return true if the student is eligible for an attendance award, or false otherwise.

Approach:
 have an absent counter
 have a late counter
 everytime A shows up add 1 to absent
 everytime l shows up add 1 to late
 if absent counter > 1 && late counter > 2 return false
 otherwise return true 
*/

function checkRecord(s) {
    let absentCounter = 0
    let lateCounter = 0

    for(let i = 0; i < s.length; i++){
     if(s[i] === "A"){
         absentCounter++
         if (absentCounter > 1){
             return false
         }
         lateCounter = 0
     } else if(s[i] === "L"){
         lateCounter++
         if(lateCounter > 2){
             return false
         }
     } else {
        lateCounter = 0
     }
    }
    return true
};

let s = "PPALLL"
console.log(checkRecord(s))


