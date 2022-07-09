// Squares of sorted array

var sortedSquares = function(nums) {

    let leftIdx = 0;
    let rightIdx = nums.length - 1;
    let result = new Array(nums);

    for (let i = nums.length - 1; i >= 0; i--) {

        let numToSquare;

        if (Math.abs(nums[leftIdx]) > Math.abs(nums[rightIdx])) {
            numToSquare = nums[leftIdx];
            leftIdx++;
        } else {
            numToSquare = nums[rightIdx];
            rightIdx--;
        }

        result[i] = numToSquare * numToSquare

    }

    return result;

    
};

let nums = [-7,-3,2,3,11];

console.log(sortedSquares(nums));