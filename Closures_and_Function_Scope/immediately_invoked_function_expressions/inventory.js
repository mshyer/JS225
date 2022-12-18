// let inventory = {
//   stocks: [],
//   stockCounts() {
//     this.stocks.forEach(function(stock) {
//       console.log(stock.name + ': ' + String(stock.count));
//     });
//   },
// };

let inventory = (function() {
  let stocks = [];

  return {
    stockCounts() {
      stocks.forEach(function(stock) {
        console.log(stock.name + ': ' + String(stock.count));
      });
    },
    addStock(newStock) {
      let isValid = stocks.every(function(stock) {
        return newStock.name !== stock.name;
      });

      if (isValid) {
        stocks.push(newStock);
      }
    },
  };
})();

inventory.addStock({name: 'Bananas', count: 1});
inventory.addStock({name: 'Plantains', count: 1});
inventory.addStock({name: 'Bunches', count: 1});
console.log(inventory);
inventory.stockCounts();
