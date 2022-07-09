//Valid Parentheses

var isValid = function(s) {

    let map = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    };
    
    if (s.length <= 1) {
        return false;
    }

    let stack = []

    for (let i = 0; i < s.length; i++) {

        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else {

            if (map[s[i]] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }

        }

    }

    return true ? stack.length === 0 : false;

};

let input = "({})((()))";
console.log(isValid(input));
