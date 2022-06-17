/*
 Pre & in & post orders
*/

// Recursion

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {    
    let result = [];
    if(!root){
        return [];
    }
  
    const buildTree = (root) => {
        if(!root){
            return result;
        }

        result.push(root.val);
        root.left && buildTree(root.left);
        root.right && buildTree(root.right);
    };
     
    buildTree(root);
    return result;
};



// Iteration 

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {    
    if(!root){
        return [];
    }
    
    let stack = [root];
    let res = [];

    while(stack.length > 0) {
        let node = stack.pop();
        
        res.push(node.val);
        
        node.right && stack.push(node.right);
        node.left && stack.push(node.left);
    }
    
    return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root) return [];
    
    let stack = [];
    let res = [];
    
    while(root || stack.length > 0){
        if(root){
            stack.push(root);
            root = root.left;
        }else {
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }
    
    return res;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {// O(n^2)
    if(!root){
        return [];
    }
    
    let stack = [root];
    let res = [];

    while(stack.length > 0) {
        let node = stack.pop();
        
        res.unshift(node.val);
        
        node.left && stack.push(node.left);
        node.right && stack.push(node.right);
    }
    
    return res;
};
