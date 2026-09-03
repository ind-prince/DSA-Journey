/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let ans = 0;
    let traversal = (curr, maxSeenSoFar) => {        
        if(curr.val >= maxSeenSoFar){
            ++ans;
        }
        let maxVal = Math.max(maxSeenSoFar, curr.val);
        curr.left && traversal(curr.left, maxVal);
        curr.right && traversal(curr.right, maxVal);
    };

    traversal(root, -Infinity);
    return ans;
};