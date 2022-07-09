var tribonacci = function(n) {
    let memo = {};
    function dp(n) {
        if (n === 0) return 0;
        if (n === 1 || n === 2) return 1;
        if (!memo.hasOwnProperty(n)) memo[n] = (dp(n - 1) + dp(n - 2) + dp(n - 3));
        return memo[n];
    }

    return dp(n);
};

let n = 25;

console.log(tribonacci(n));