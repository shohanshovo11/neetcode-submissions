class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const shuja = {
            "[": "]",
            "(": ")",
            "{": "}",
        }
        const ulta = {
            "]": "[",
            ")": "(",
            "}": "{"
        }
        const stack = [];

        for(let c of s) {
            if(shuja[c]) stack.push(c);
            else if(ulta[c]) {
                if(stack[stack.length - 1]!==ulta[c]){
                    return false;
                }
                else{
                    stack.pop();
                }
            }
        }
        if(stack.length === 0) return true;
        else return false;
    }
}
