class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let si = 0;
        for(const x of t){
            if(x===s[si]){
                si++;
            }
        }
        if(s.length===si) return true;
        return false;
    }
}
