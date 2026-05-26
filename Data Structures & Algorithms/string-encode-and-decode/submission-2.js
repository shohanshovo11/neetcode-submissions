class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((str)=>`${str.length}#${str}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let n = str.length;
        let i = 0;
        let res = [];
        while(i<n){
            let j = i
            while(str[j]!=="#"){
                j++;
            }
            let len = parseInt(str.slice(i, j));
            let newStr = str.slice(j+1, j+1+len);
            res.push(newStr);
            i = j + 1 + len;
        }
        return res;
    }
}
