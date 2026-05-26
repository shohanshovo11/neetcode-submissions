class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        for(let x of nums){
            if(map.has(x)){
                return true;
            }else{
                map.set(x, 1);
            }
        }
        return false;
    }
}
