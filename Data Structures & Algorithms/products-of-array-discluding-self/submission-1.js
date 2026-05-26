class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const ltr = [];
        const rtl = [];
        let revNums = [...nums].reverse();
        nums.reduce((prev, currVal, idx, arr)=>{
            if(idx===0){
                ltr.push(Infinity);
                return currVal;
            }else{
                ltr.push(prev);
                return prev*currVal;
            }
        }, 1);
        revNums.reduce((prev, currVal, idx, arr)=>{
            if(idx===0){
                rtl.push(Infinity);
                return currVal;
            }else{
                rtl.push(prev);
                return prev*currVal;
            }
        }, 1);
        rtl.reverse();
        return ltr.map((elem, idx)=>{
            let prod = 1;
            if(elem!==Infinity)prod*=elem;
            if(rtl[idx]!==Infinity)prod*=rtl[idx];
            return prod;
        });
    }
}
