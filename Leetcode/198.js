var rob = function(nums) {
    
    let memo = {};
    
    function dp(i) {
        if (i === 0) return nums[0];
        if (i === 1) return Math.max(nums[0], nums[i]);
        if (!memo.hasOwnProperty(i)) memo[i] = Math.max(dp(i - 1), (dp(i - 2) + nums[i]));
        return memo[i];
    }
    
    return dp(nums.length - 1);
};

let nums = [1, 2, 3, 1];

console.log(rob(nums));