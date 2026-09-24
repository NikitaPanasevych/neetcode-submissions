class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0;
        }
        let set = new Set(nums);
        let maxStreak = 0;
        for (const num of set) {
            if (!set.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;
                while (set.has(currentNum + 1)) {
                    currentStreak++;
                    currentNum++;
                }
                maxStreak = Math.max(maxStreak, currentStreak);
                currentStreak = 0;
            }
        }
        return maxStreak;
    }
}
