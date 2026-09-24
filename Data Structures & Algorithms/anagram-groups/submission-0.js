class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = [];
        let map = new Map();
        for (let str of strs) {
            let sorted = str.split("").sort().join("")
            if (map.has(sorted)) {
                map.set(sorted, [str,
                    ...map.get(sorted),
                ]);
            } else {
                map.set(sorted, [str]);
            }
        }
        for (const [key, value] of map.entries()) {
            result.push(value)
        }
        return result
    }
}
