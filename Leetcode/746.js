var minCostClimbingStairs = function(cost) {

    let memo = {};

    function dp(i) {
        if (i < 2) return 0;
        if (!memo.hasOwnProperty(i)) memo[i] = Math.min(dp(i - 1) + cost[i - 1], dp(i - 2) + cost[i - 2]);
        console.log(memo);
        return memo[i];
    }

    return dp(cost.length);
    
};

let cost = [1,100,1,1,1,100,1,1,100,1];

console.log(minCostClimbingStairs(cost));