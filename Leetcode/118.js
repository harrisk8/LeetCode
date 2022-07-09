var generate = function(numRows) {
    let output = [[1]];
    if (numRows === 1) return output;

    for (let i = 1; i <= numRows - 1; i++) {
        let newRow = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                newRow.push(1);
            } else {
                newRow.push((output[i - 1][j - 1] + output[i - 1][j]));
            }
        }
        output.push(newRow);
    }
    return output;
};

let numRows = 5;

console.log(generate(numRows));
console.log("2");

