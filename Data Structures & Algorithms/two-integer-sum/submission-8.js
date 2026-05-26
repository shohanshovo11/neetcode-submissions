class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        let ans;
        nums.find((num, idx) => {
            if(map.has(target-num)){
                ans = [map.get(target-num), idx];
                return true;
            }
            map.set(num, idx);
        })
        return ans;
    }
}
