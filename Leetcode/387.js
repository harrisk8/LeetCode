var firstUniqChar = function(s) {

    let map = {};

    for (let i = 0; i < s.length; i++) {
        if (isNaN(map[s[i]])) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }

    
    return -1;
};

let string = "loveleetcode";
console.log(firstUniqChar(string));