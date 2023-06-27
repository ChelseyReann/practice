//A phrase is a palindrome if, after converting all uppercase letter into lowercase letters & removing all non-alphanumeric characters, it reads the same fowards and backwards. Alpsnumeric characters include letters & numbers.
//given a string(s) return true if palindrome & false otherwise


function isPalindrome(s){ //O(1)
    if(s === ""){         //O(1)
        return true;      //O(1)
    }

    let cleanedS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); //O(n)
    let reversedS = cleanedS.split("").reverse().join(""); //O(n)

    return cleanedS === reversedS; //O(n)
}

let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))