class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;
        let i = 0;
        let j = heights.length-1;
        while(i<j){
            maxWater = Math.max((Math.min(heights[i], heights[j]))*(j-i), maxWater);
            console.log(maxWater);
            if(heights[i]<heights[j]){
                i++;
            }else{
                j--;
            }
        }
        return maxWater;
    }
}
