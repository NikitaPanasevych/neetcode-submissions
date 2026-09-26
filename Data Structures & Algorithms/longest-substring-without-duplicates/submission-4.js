class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let fast = 0;
        let slow = 0;
        let maxLength = 0;
        let map = new Map();
        if (s.length === 1) {
            return 1;
        }
        for (let i = 0; i < s.length; i++) {
            fast = i;
            if (map.has(s[fast]) && map.get(s[fast]) >= slow) {
                maxLength = Math.max(maxLength, fast - slow);
                slow = map.get(s[fast]) + 1;
                map.set(s[fast], i);
                continue;
            }
            maxLength = Math.max(maxLength, fast - slow + 1);
            map.set(s[fast], i);
        }
        return maxLength;
    }
}
