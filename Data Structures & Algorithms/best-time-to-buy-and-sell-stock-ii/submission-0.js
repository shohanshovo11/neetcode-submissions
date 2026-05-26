class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const len = prices.length;
        let currMin = prices[0];
        let maxProfit = 0;
        for(let i=1; i<len; i++){
            if(prices[i]>currMin){
                // beiccha dibo
                maxProfit+=(prices[i] - currMin);
                currMin = prices[i];
            }else{
                currMin = Math.min(currMin, prices[i]);
            }
        }
        return maxProfit;
    }
}
