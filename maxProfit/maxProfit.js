/*https://leetcode.com/problems/best-time-to-buy-and-sell-stock/*/

/**
 * @param {number[]} prices
 * @return {number}
*/

const maxProfit = (prices) => {
  let buy = 0;
  let sell = 1;
  let profit = 0;

  while (sell < prices.length) {
    if (prices[sell] > prices[buy]) {
      profit = Math.max(profit, prices[sell] - prices[buy])
    } else {
      buy = sell;
    }
    sell++;
  }

  return profit;
}

export default maxProfit;
