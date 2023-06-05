// There is a function signFunc(x) that returns:

// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product)

let arraySign = function (nums) {
    let product = 1
    let signFunc = Math.sign
    
    for (let num of nums){
        product *= num
        if (num === 0){
            return 0
        }
    }

    return signFunc(product)
}