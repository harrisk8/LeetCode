var widthOfBinaryTree = function(root) {
    if (!root) return null;
    let queue = [{node: root, position: 0}]
    let maxWidth = 0;
    while (queue.length !== 0) {
        let levelLength = queue.length;
        let min = Number.MAX_VALUE;
        let max = 0;
        for (let i = 0; i < levelLength; i++) {
            const current = queue.shift();
            min = Math.min(min, current.position);
            max = Math.max(max, current.position);
            if (current.node.left) queue.push({node: current.node.left, position: current.position * 2 + 1});
            if (current.node.right) queue.push({node: current.node.right, position: current.position * 2 + 2});
        }
        const levelWidth = levelLength === 1 ? 1 : max - min + 1;
        maxWidth = Math.max(maxWidth,levelWidth)
    }
    return maxWidth;
};