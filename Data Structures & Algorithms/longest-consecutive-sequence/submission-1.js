class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0)return 0;
        nums.sort((a, b) => a - b);
        let maxCount = 1;
        let count = 1;
        for(let i=1; i<nums.length; i++){
            if(nums[i]===nums[i-1])continue;
            else if(nums[i]===nums[i-1]+1)count++;
            else count=1;
            maxCount = Math.max(maxCount, count);
        }
        return maxCount;
    }
}
