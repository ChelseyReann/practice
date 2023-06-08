//Given an integer array nums and an integer val, remove all occurences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
//Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
//Change the array nums such that the first k elements of nums contain the elemnts which are not equla to val. the remaining elements of nums are not important as well as the size of nums.
//return k

const removeElement = (nums, val) => {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] == nums [i]
            k++
        }
    }
    return k
}

console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))