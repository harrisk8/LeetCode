var numIslands = function(grid) {

    if (grid === []) return 0
    let rows = grid.length - 1;
    let columns = grid[0].length - 1;
    let numIslands = 0;
    let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];

    var bfs = function(row, col) {

        let queue = [[row, col]];
        grid[row][col] = "0"


        while (queue.length) {

            let size = queue.length;

            for (let i = 0; i < size; i++) {

                let [currentRow, currentCol] = queue.pop();

                for (let [x, y] of directions) {

                    let nextRow = currentRow + x;
                    let nextCol = currentCol + y;

    
                    if ((nextRow < 0) || (nextRow > rows) || (nextCol < 0) || (nextCol > columns) || (grid[nextRow][nextCol] === "0")) {
                        continue;
                    } 
                    grid[nextRow][nextCol] = "0";
                    queue.unshift([nextRow, nextCol]);

                }
            }
        }
    }

    for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= columns; c++) {
            if ((grid[r][c] === "1")) {
                numIslands++;
                bfs(r, c)
            }
        }
    }

    return numIslands;
    
};

let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","1"]
  ];

  console.log(numIslands(grid));


  