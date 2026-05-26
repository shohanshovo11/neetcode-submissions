class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let ti = 0;
        for(const x of s){
            if(x===t[ti]){
                ti++;
            }
            if(ti >= t.length){
                return 0;
            }
        }
        return t.length - ti;
    }
}
