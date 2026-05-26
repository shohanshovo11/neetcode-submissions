class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const results = [];
        const len = nums.length;
        nums.sort((a, b) => a-b);

        for(let i=0; i<len; i++){
            if(i>0 && nums[i]===nums[i-1])continue;
            let target = 0 - nums[i];
            let left = i+1;
            let right = len - 1;
            while(left<right){
                let currSum = nums[left] + nums[right];
                if(currSum > target){
                    right--;
                }else if(currSum<target){
                    left++;
                }else{
                    results.push([nums[i], nums[left], nums[right]]);
                    while(nums[left]===nums[left+1]){
                        left++;
                    }
                    left++;
                    right--;
                }
            }
        }
        return results;
    }
}
