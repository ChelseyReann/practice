/* 
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Approach:
- split s into an array
- create a vowels array
- create two pointer to go through s
- see if either of those pointers contains a vowel, if only one does increase or decrease the pointer value until they both contain vowels. 
- once they both contain vowels introduce a current variable that is equal to the split array at the start and manually swap the values
 - join s back into a string and return the value
*/
