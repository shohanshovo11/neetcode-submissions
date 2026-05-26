class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const count = new Array(26).fill(0);

        for(const ch of s){
            count[ch.charCodeAt(0)-97]++;
        }

        for(const ch of t){
            let countOfCurrent = --count[ch.charCodeAt(0) - 97];
            if(countOfCurrent < 0) {
                return false;
            }
        }
        return true;
    }
}
