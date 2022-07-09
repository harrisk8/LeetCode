var maxSubArray = function(nums) {

let maxSum = nums[0];
let runningSum = nums[0];

    for (let i = 1; i < nums.length; i++) {

        runningSum = Math.max(nums[i], nums[i] + runningSum);
        console.log(runningSum);
        maxSum = Math.max(runningSum, maxSum);
        console.log(maxSum);


    }

    return maxSum;
    
};

let nums = [-5, 4, -1, 7, 8];

console.log(maxSubArray(nums));