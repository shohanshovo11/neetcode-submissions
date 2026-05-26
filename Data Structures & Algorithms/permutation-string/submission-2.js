class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        const mp = new Map();
        const len = s1.length;
        for(let char of s1){
            mp.set(char, (mp.get(char) || 0) + 1);
        }
        let res = false;
        let match = 0;
        const mp2 = new Map();
        let left = 0;
        for(let right=0; right<s2.length; right++){
            let ch = s2[right];
            mp2.set(ch, (mp2.get(ch)||0) + 1);
            if(mp2.get(ch) && mp2.get(ch) === mp.get(ch)){
                match++;
            }
            while(right-left+1 > s1.length){
                let leftChar = s2[left];
                if(mp2.get(leftChar) && mp2.get(leftChar) === mp.get(leftChar)){
                    match--;
                }
                mp2.set(leftChar, (mp2.get(leftChar) || 1) - 1);
                left++;
            }
            if(match === mp.size) return true;
        }
        return false;
    }
}
