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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    
    let Q = [];
    
    const buildTreeLevel = (root, lv) => {
        if(!root){
            return Q;
        }
        
        if(!Q[lv]){
            Q[lv] = [];
        }
        
        Q[lv].push(root.val);
        root.left && buildTreeLevel(root.left, lv + 1);
        root.right && buildTreeLevel(root.right, lv + 1);
    };
    
    buildTreeLevel(root, 0);
    return Q;
};
