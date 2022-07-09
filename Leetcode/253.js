class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.unshift(value);
        this.heap.sort((a, b) => a - b);
    }

    extract() {
        if (this.heap.length === 0) return null;
        return this.heap.shift();
    }

    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

var minMeetingRooms = function(intervals) {

    intervals.sort((a, b) => a[0] - b[0]);
    
    let maxRooms = 0;

    let heap = new MinHeap();

    heap.insert(intervals[0][1]);
    maxRooms++;

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= heap.peek()) {
            heap.extract();
            heap.insert(intervals[i][1])
        } else {
            heap.insert(intervals[i][1]);
            maxRooms++;
        }
    }

    return maxRooms;

    
};



let intervals = [[7,10],[2,4]];
console.log(minMeetingRooms(intervals));