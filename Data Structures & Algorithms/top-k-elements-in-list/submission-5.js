class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        let result = [];
        for (let i of nums) {
            map.set(i, (map.get(i) ?? 0) + 1);
        }
        let buckets = new Array();
        for (const [key, value] of map) {
            let bucket = [];
            bucket.push(key);
            if (buckets[value]) {
                buckets[value].push(key);
            } else {
                buckets[value] = bucket;
            }
        }
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (!buckets[i]) {
                continue;
            }
            result.push(...buckets[i]);
            if (result.length >= k) {
                break;
            }
        }
        return result.splice(0, k);
    }
}
