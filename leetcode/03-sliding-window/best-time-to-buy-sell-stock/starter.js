function maxProfit(prices) {
  let minPrice = prices[0];
  let maxPrice = prices[0];
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      const currentProfit = price - minPrice;

      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
      }
      maxPrice = price;
    }
  }
  return [minPrice, maxPrice, maxProfit];
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5);
