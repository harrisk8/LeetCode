// Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {

    let idx = 0;

    while (idx < nums.length - 1) {
        if (nums[idx + 1] === nums[idx]) {
            nums.splice(idx + 1, 1);
        } else if (nums[idx + 1] !== nums[idx]) {
            idx++;
        }
    }

    console.log(nums);

    return nums.length;
    
};

let nums  = [1, 1, 2, 2, 3];

removeDuplicates(nums);