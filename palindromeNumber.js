//Given an integer(x), return true if x is a palindrome, and false otherwise
//sample input x = 121
//sample output =  true

const isPalindrome = (x) => {
    let i = parseFloat(x.toString().split('').reverse().join(''))

    if (i === x){
        return true
    } else {
        return false
    }
}

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))