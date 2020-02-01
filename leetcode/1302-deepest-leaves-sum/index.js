const deepestLeavesSum = function(root) {
    let arr = [];
    let depth = 0;

    // Sums up the deepest nodes when used at the end
    const reducer = (acc, cur) => acc + cur;

    // Recursive fn to traverse the binary tree
    const testNode = (node, currentDepth) => {
        if (node === null) return;

        // If end of the branch, record it in `arr`...
        if (node.left === null && node.right === null) {
            arr[currentDepth]
                ? arr[currentDepth].push(node.val)
                : (arr[currentDepth] = [node.val]);
            return currentDepth;
        }

        // ...otherwise go deeper
        currentDepth++;
        let leftD = testNode(node.left, currentDepth);
        let rightD = testNode(node.right, currentDepth);

        if (leftD > currentDepth) {
            currentDepth = leftD;
        }
        if (rightD > currentDepth) {
            currentDepth = rightD;
        }
        return currentDepth;
    };

    // Start here
    depth = testNode(root, depth);
    return arr[depth].reduce(reducer);
};
