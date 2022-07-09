var strStr = function(haystack, needle) {

    if (haystack.length < needle.length) return -1;

    for (let i = 0; i < haystack.length; i++) {

        if (haystack[i] === needle[0]) {

            for (let j = 0; j < needle.length; j++) {
                if (haystack[i + j] === needle[j]) {
                    if (j === needle.length - 1) {
                        return i;
                    }
                } else {
                    break;
                }
            }
        
        }
    }

    return -1;
    
};

let haystack = "aaaasda";
let needle = "asda";

console.log(strStr(haystack, needle));
