// Search Insert Position

var searchInsert = function(nums, target) {

    //Perform binary search
    let startIdx = 0;
    let endIdx = nums.length - 1;
    let midpoint = 0;

    while (startIdx <= endIdx) {
        midpoint = Math.floor((startIdx + endIdx) / 2);

        if (nums[midpoint] === target) {
            return midpoint;
        } else if (nums[midpoint] > target) {
            endIdx = midpoint - 1;
        } else if (nums[midpoint] < target) {
            startIdx = midpoint + 1;
        }
    }

    return startIdx;
  
    


};

let nums = [1,3,5,6];
let target = 4

console.log(searchInsert(nums, target));