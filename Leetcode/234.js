// Time complexity = O(n), Space complexity = O(n)
var isPalindrome = function(head) {
    
    if (head === null) return false;
    
    let array = [];
    
    while (head) {
        array.push(head.val);
        head = head.next;
    }
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[array.length - 1 - i]) return false;
    }
    
    return true;
    
};

// Time complexity = O(n), Space complexity = O(1)
var isPalindrome = function(head) {
    
    let slow = head;
    let fast = head;
    
    while (fast) {
        if (fast.next === null) break;
        fast = fast.next.next;
        if (fast === null) break;
        slow = slow.next;
    }
    
    let midpoint = slow;
    let previousNode = null;

    function reverse(current) {
        while (current) {
            let nextTemp = current.next;
            current.next = previousNode;
            previousNode = current;
            current = nextTemp;
        }
        
        midpoint.next = previousNode;
    }
    
    reverse(midpoint.next);
    let reversedSecondHalf = midpoint.next;
    //Midpoint.next represents the second half of the array BEYOND the center element if there is one
    
    while (head && reversedSecondHalf) {
        if (head.val !== reversedSecondHalf.val) {
            return false;
        } else {
            head = head.next;
            reversedSecondHalf = reversedSecondHalf.next;
            
        }
    }

    return true;
    
    
}