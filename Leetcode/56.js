var merge = function(intervals) {

    let idx = 0;

    intervals.sort((a, b) => a[0] - b[0]);

    while (idx < intervals.length - 1) {
        if (intervals[idx][1] >= intervals[idx + 1][0]) {
            intervals[idx][1] = intervals[idx + 1][1];
            intervals.splice(idx + 1, 1);
        } else {
            idx++;
        }
    }

    return intervals;
    
};


let intervals = [[1,3],[2,6],[8,10],[15,18]];

console.log(merge(intervals));