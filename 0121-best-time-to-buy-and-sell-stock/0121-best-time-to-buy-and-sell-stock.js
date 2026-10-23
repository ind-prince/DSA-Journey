/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {

        let profit = prices[i] - minPrice;
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
};