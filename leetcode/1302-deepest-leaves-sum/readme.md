# 1302. Deepest Leaves Sum

> - level: **medium**
> - ref no: [1302][example-url]
> - contributor: LeetCode
> - my stats:
>   - submitted: Jan 21, 2020
>   - runtime: 72 ms &mdash; **faster than > 99% of submissions!**
>   - memory usage: 43.3 MB &mdash; 100% rating (not enough submissions to compare) - might be broken...

## Problem

Given a binary tree, return the sum of values of its deepest leaves.

### Example

Image referenced from [LeetCode][example-url]:

![Binary Tree Example][example-img]

```
Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15
```

### Constraints

- The number of nodes in the tree is between 1 and 10^4.
- The value of nodes is between 1 and 100.

## Resources

### Definition for a binary tree node

```javascript
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
```

### Solution Function Signature

```javascript
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {

};
```

### `console.log(root)`

This is the output of logging `root` when you run `deepestLeavesSum`

```
TreeNode {
    val: 1,
    right: TreeNode {
        val: 3,
        right: TreeNode {
            val: 6,
            right: [TreeNode],
            left: null
        },
        left: null
    },
    left: TreeNode {
        val: 2,
        right: TreeNode {
            val: 5,
            right: null,
            left: null
        },
        left: TreeNode {
            val: 4,
            right: null,
            left: [TreeNode]
        }
    }
}
```

## My Solution

[Click here for solution](./index.js)

[example-url]: https://leetcode.com/problems/deepest-leaves-sum/
[example-img]: https://assets.leetcode.com/uploads/2019/07/31/1483_ex1.png
