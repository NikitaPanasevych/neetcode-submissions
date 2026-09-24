class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0){
            return 0
        }
        let set = new Set(nums);
        let maxStreak = 1;
        for (let i = 0; i < nums.length; i++) {
            let currentStreak = 1;
            let currentNum = nums[i];
            if (set.has(nums[i] - 1)) {
                continue;
            } else {
                while (set.has(currentNum + 1)) {
                    currentStreak++;
                    maxStreak = Math.max(maxStreak, currentStreak);
                    currentNum++;
                }
                currentStreak = 0;
            }
        }
        return maxStreak;
    }
}
