var validPalindrome = function(s) {

    function checkPalindrome(s, i, j) {
        while (i < j) {
            if (s[i] !== s[j]) return false;
            i++;
            j--;
        }
        return true;
    }

    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i] !== s[j]) {
            return checkPalindrome(s, i + 1, j) || checkPalindrome(s, i, j - 1);
        }
        i++;
        j--;
    }

    return true;
    
};

let s = "abba";

console.log(validPalindrome(s));