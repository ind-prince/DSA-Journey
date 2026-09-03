/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if(!root) return root;
    let traversal = (curr) =>{
        if(curr.left){
           curr.left.next = curr.right;
        };
        if(curr.right && curr.next){
            curr.right.next = curr.next.left;
        }

        curr.left && traversal(curr.left);
        curr.right && traversal(curr.right);
    };
    traversal(root);
    return root;
    
};