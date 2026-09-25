class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let resultArr = [];
        for (let i = 0; i < nums.length; i++) {
            if (i !== 0 && nums[i - 1] === nums[i]) {
                continue;
            }
            let left = i + 1;
            let right = nums.length - 1;

            while (right > left) {
                let sum = nums[i] + nums[left] + nums[right];
                if (sum > 0) {
                    right--;
                    continue;
                }
                if (sum < 0) {
                    left++;
                    continue;
                }
                if (sum === 0) {
                    resultArr.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (nums[left] === nums[left - 1]) {
                        left++;
                    }
                }
            }
        }
        return resultArr;
    }
}
