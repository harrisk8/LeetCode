var lengthOfLongestSubstring = function(s) {
    
    let seen = new Set();;
    let left = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        while (seen.has(s[i])) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[i]);
        maxLength = Math.max(maxLength, i - left + 1);
    }



    return maxLength;
};

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));