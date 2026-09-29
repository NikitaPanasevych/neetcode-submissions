/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        let result = [];
        if (!root) {
            return result;
        }
        let queue = [root];

        while (queue.length > 0) {
            let length = queue.length;
            let thisLevelSubArr = [];
            for (let i = 0; i < length; i++) {
                let node = queue.shift();
                thisLevelSubArr.push(node.val);
                if(node.left){
                    queue.push(node.left);
                }
                if(node.right){
                    queue.push(node.right);
                }
            }
            result.push(thisLevelSubArr);
        }
        
        return result;
    }
}
