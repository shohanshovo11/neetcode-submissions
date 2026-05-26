class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        for(const num of nums){
            freq.set(num, (freq.get(num) || 0) + 1);
        }
        const group = new Map();
        for(const [key, val] of freq){
            if(!group.has(val))group.set(val, []);
            group.get(val).push(key);
        }        
        const freqArr = [...group.entries()].sort((a, b) => b[0] - a[0]);
        return freqArr.flatMap((e)=>e[1]).slice(0,k);

        // const res = [];
        // let cnt = 0;
        // for(let i=0; i<freqArr.length; i+=1){
        //     const entry = freqArr[i];
        //     for(let j=0; j<entry[1].length; j+=1){
        //         res.push(entry[1][j]);
        //         cnt=cnt+1;
        //         if(cnt===k)break;
        //     }
        //     if(cnt===k)break;
        // }
    }
}