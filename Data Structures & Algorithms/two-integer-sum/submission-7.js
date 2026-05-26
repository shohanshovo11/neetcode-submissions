class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i=0, length=nums.length - 1;
        let map = new Map();
        while(i<=length){
            const targetElementIdx = map.get(target - nums[i]);
            if(targetElementIdx){
                return [targetElementIdx-1, i]
            }
            map.set(nums[i], i+1);
            i++;
        }
    }
}
