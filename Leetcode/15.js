var threeSum = function(nums) {


    let result = [];
    nums.sort((a, b) => a - b);
    console.log(nums);

    for (let i = 0; i < nums.length - 2; i++) {
        
        //if (nums[i] === nums[i + 1]) continue;
        if (nums[i] === nums[i - 1] && i > 0) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                result.push([nums[i], nums[left], nums[right]])
                left++;

                while (nums[left] === nums[left - 1] && left < right) {
                    left++;
                }
            }

        }


    }

    return result;
};
console.log("ASD");
let nums = [-1,0,1,2,-1,-4, -4, 8];

console.log(threeSum(nums));