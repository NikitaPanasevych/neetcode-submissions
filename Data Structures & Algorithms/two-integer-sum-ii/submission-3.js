class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = numbers.length
        let left = 0;
        let right = l-1;
        while(left<right){
            let sum = numbers[left]+numbers[right]
            if(sum>target){
                right--;
                continue;
            }
            if(sum<target){
                left++;
                continue;
            }if(sum===target){
                return [left+1, right+1]
            }
            
        }
    }
}
