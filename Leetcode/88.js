var merge = function(nums1, m, nums2, n) {

    if (n === 0) return nums1;

    let nums1Copy = [...nums1];
    console.log(nums1Copy);    
 
    let oneIdx = 0;
    let twoIdx = 0;

    for (let i = 0; i < (m + n); i++) {

        if (nums1Copy[oneIdx] < nums2[twoIdx] || twoIdx === nums2.length) {
            nums1[i] = nums1Copy[oneIdx];
            oneIdx++;
        } else {
            nums1[i] = nums2[twoIdx];
            twoIdx++;
        }
        
    }

    return nums1;
};


let nums1 = [2, 0];
let m = 1; 
let nums2 = [1];
let n = 1

console.log(merge(nums1, m, nums2, n));