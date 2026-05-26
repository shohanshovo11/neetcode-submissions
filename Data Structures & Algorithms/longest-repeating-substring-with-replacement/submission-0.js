class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let n = s.length;
        let mxCnt = 0;
        
        for(let i=0; i<n; i++){
            let mp = new Map();
            let maxF = 0;
            for(let j=i; j<n; j++){
                mp.set(s[j], (mp.get(s[j]) || 0) + 1);
                maxF = Math.max(maxF, mp.get(s[j]));
                if(j-i+1-maxF<=k){
                    mxCnt = Math.max(mxCnt, j-i+1);
                }
            }
        }
        return mxCnt;
    }
}
