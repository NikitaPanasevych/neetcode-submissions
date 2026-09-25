class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sArray = s.toLowerCase().replace(/\W/g, '').split('')
        let left = 0;
        let right = sArray.length-1
        while(left<right){
            if(sArray[left]!==sArray[right]){
                return false
            }
            left++;
            right--;
        }
        return true
    }
}
