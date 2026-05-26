class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        s = s.trim();
        let len = s.length;
        let word = 0;
        for(let i = len-1; i>=0; i--){
            if(s[i]===' '){
                break;
            }
            word++;
        }
        return word;
    }
}
