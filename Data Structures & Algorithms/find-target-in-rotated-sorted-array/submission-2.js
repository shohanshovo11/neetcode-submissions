class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let lo = 0;
        let hi = nums.length-1;
        while(lo<=hi){
            let mid = Math.floor((hi+lo)/2);
            if(target===nums[mid])return mid;
            //check which side is sorted, left is sorted
            if(nums[mid]>=nums[lo]){
                if(target>=nums[lo] && target<=nums[mid]){
                    hi = mid - 1;
                }else{
                    lo = mid + 1;
                }
            }else{
                if(target>=nums[mid] && target<=nums[hi]){
                    lo = mid + 1;
                }else{
                    hi = mid - 1;
                }
            }
        }
        return -1;
    }
}
