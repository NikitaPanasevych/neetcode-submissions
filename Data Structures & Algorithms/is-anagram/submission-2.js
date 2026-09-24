class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        let frequencyMap = new Map();
        for (let c of s) {
            frequencyMap.set(c, (frequencyMap.get(c) ?? 0) + 1);
        }
        for (let c of t) {
            if (!frequencyMap.has(c)) {
                return false;
            }
            if (frequencyMap.get(c) === 1) {
                frequencyMap.delete(c);
            } else {
                frequencyMap.set(c, frequencyMap.get(c) - 1);
            }
        }
        return frequencyMap.size === 0;
    }
}
