//Given an array of words, find and return an array of integers representing the frequency of each word in the input array. Each word may appear multiple times in the input array. The output array should contain the frequency of each word in the same order as the original words appear in the input array.
//Example Input:words = ["apple", "banana", "apple", "orange", "banana", "apple"]
//Example Output: [3, 2, 3, 1, 2, 3]

function wordFrequency(strings){
    let freqMap = {}
    let results = []

    for(let string of strings){
        if(!freqMap[string]){
            freqMap[string] = 1
        } else {
            freqMap[string]++
        }
    }

    for(let string of strings){
        results.push(freqMap[string])
    }

    return results
}

let strings = ["apple", "banana", "apple", "orange", "banana", "apple"]
console.log(wordFrequency(strings))