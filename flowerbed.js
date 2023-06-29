// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

//need to create empty plots and set that to 0 for now
//need to creaty available plots and set that to ) as well
//loop through the flowerbed and if flowerbed[i] === 0 then empty Plots increases by 1
//once the empty plots increase then we enter the next if statement -> check if the previous plot is either thr first plot or an empty plot && check if the next plot is the last plot or an empty plot
//if it makes it through that conditional then availablePlots++ and make that current spot full so it doen't mess up any future iterations
//outside of the for loop return if the available plots are greater than or equal to n 
function canPlant(flowerbed, n){
    let emptyPlots = 0
    let availablePlots = 0

    for (let i = 0; i < flowerbed.length; i++){
        if(flowerbed[i] === 0){
            emptyPlots++
            if((i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)){
                availablePlots++
                flowerbed[i] = 1
            }
        }
    }
    return availablePlots >= n
}

let flowerbed = [1, 0, 0, 0, 1]
let n = 1
console.log(canPlant(flowerbed, n))
//time complexity - O(N) - iterating through the array once
//space complexity - O(1) - taking constant space because we aren't creating anything new