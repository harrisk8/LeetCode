//Largest Numbers

var largestNumber = function(nums) {

    for (let i = 0; i < nums.length; i++) {
        nums[i] = String(nums[i]);

    }

    nums.sort((a, b) => compare(a, b));

    console.log(nums.join(''));


    return nums.join('')
    
};

var compare = function(n1, n2) {
    if (n1 + n2 > n2 + n1) {
        return -1;
    } else {
        return 1;
    }
};

let nums = [5, 2, 3, 4, 5, 19, 91];
largestNumber(nums);

