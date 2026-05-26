class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0, j = 0;
        let map = {};
        let mxCnt = 0;
        while(j<s.length){
            if(map[s[j]] && map[s[j]]>=i){
                mxCnt = Math.max(j-i, mxCnt);
                i = map[s[j]];
            }
            map[s[j]] = j + 1;
            j++;
        }
        mxCnt =  Math.max(mxCnt, j-i);
        return mxCnt;
    }
}
