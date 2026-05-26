class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixSum = new Map();
        prefixSum.set(0, 1);
        let res = 0;
        let currSum = 0;
        for(let ele of nums){
            currSum+=ele;
            const diff = currSum-k;
            const subArrayOccurance = prefixSum.get(diff) || 0;
            res+=(subArrayOccurance);
            prefixSum.set(currSum, (prefixSum.get(currSum) || 0) + 1);
        }
        return res;
    }
}
