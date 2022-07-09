// Longest Common Prefix

var longestCommonPrefix = function(strings) {

    if (strings.length === 0) return "";

    let lastLongestPrefix = strings[0];
    let newLongestPrefix = "";

    for (let i = 0; i < strings.length; i++) {
        console.log(strings[i]);

        newLongestPrefix = "";

        for (let j = 0; j < strings[i].length; j++) {
            if (strings[i][j] === lastLongestPrefix[j]) {

                newLongestPrefix += strings[i][j];

            } else {
                break;
            }
        }
        lastLongestPrefix = newLongestPrefix;
    }

    return lastLongestPrefix;
    
};

let strings = [];

console.log(longestCommonPrefix(strings));

// Time: O(n * s);