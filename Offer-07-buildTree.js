// 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null
    let root = preorder[0];
    let node = new TreeNode(root);
    let i = inorder.indexOf(root);

    node.left = buildTree(preorder.slice(1,i+1),inorder.slice(0,i));
    node.right = buildTree(preorder.slice(i+1),inorder.slice(i+1));
    return node;
};

let preorder = [3,9,20,15,7],inorder = [9,3,15,20,7];
console.log(buildTree(preorder,inorder))