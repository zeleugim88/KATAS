/* Given an unsorted array of integers and a number n, find the subarray 
of length n that has the largest sum. Example:
largestSubarraySum([3,1,4,1,5,9,2,6],3)
[9,2,6] */

const array = [3,1,4,1,5,9,2,6];

const largestSubarraySum = (array, maxLength) => {
let finalArray = [];
let maxSum = 0;
    for (let i = 0; i < array.length; i++) {
        let tempArray = array.slice(i,i+maxLength)
        let reduction = tempArray.reduce((total, num) => total + num,0)
        if (reduction > maxSum) {maxSum = reduction; finalArray = tempArray}
    }
    console.log(`Array [${finalArray}] sums ${maxSum} `)
}

console.log(largestSubarraySum(array, 3))