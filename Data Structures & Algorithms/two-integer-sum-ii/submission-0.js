class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i=0, len=nums.length, j=len-1;
        while(i<j){
            let currSum = nums[i]+nums[j];
            if(currSum < target){
                i++;
            }else if(currSum > target){
                j--;
            }else{
                return [i+1, j+1]
            }
        }
    }
}
