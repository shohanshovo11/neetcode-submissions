class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();

        for(const n of nums){
            freq.set(n, (freq.get(n) || 0) + 1);
        }

        // [[1, 1], [2, 2], [3, 3]]
        return [...freq.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map((a) => a[0])

        // console.log(x);
    }
}
