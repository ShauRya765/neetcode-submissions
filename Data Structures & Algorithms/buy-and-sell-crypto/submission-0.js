class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    maxProfit(prices) {
        // track lowest price seen so far (best buy) — start at first price
        // track max profit — start at 0

        // for each price:
        //   if this price is lower than lowest buy → update lowest buy
        //   else → profit if sold today = price - lowest buy
        //          if that profit > max profit → update max profit

        // return max profit
        let minBuy = prices[0];   // start buy at first price
        // minBuy = Math.min(minBuy, price);        // update cheapest
        // maxProfit = Math.max(maxProfit, profit); // keep the best
        let maxProfit = 0;
        for(let i=0;i<prices.length;i++){
            let profit = 0
            if(prices[i]<minBuy){
                minBuy=prices[i];
            }else{
                profit = prices[i]-minBuy;
                maxProfit = Math.max(maxProfit,profit)
            }
        }
        return maxProfit;
    }
}
