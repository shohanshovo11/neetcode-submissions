class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let sum = 0;
        let len = s.length;
        for(let i=1; i<len; i++){
            sum+=Math.abs(s.charCodeAt(i) - s.charCodeAt(i-1));
        }
        return sum;
    }
}
