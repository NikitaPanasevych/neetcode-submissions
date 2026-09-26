class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = prices[0];
        let sell = 0;
        let maxProfit = 0;
        for (let i = 0; i < prices.length; i++) {
            sell = prices[i];
            if (sell > buy) {
                maxProfit = Math.max(maxProfit, sell - buy);
            } else {
                buy = prices[i];
            }
        }
        return maxProfit;
    }
}
