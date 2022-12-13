let scissorsId = 0;
let scissorsName = 'Scissors';
let scissorsStock = 8;
let scissorsPrice = 10;

let drillId = 1;
let drillName = 'Cordless Drill';
let drillStock = 15;
let drillPrice = 45;

// We can use objects to organize our code by:
//   -Creating an object factory to make TOOLS
//   -Return an object, where each returned tool has properties:
//     -ID
//     -Name
//     -Stock
//     -Price

haha = 'hoohoo'  ;

let scissors = {
  id: 0,
  name: 'Scissors',
  stock: 8,
  price: 10,
};

let drill = {
  id: 1,
  name: 'Cordless Drill',
  stock: 15,
  price: 45,
};

const IDs = [];
function nextId() {
  if (IDs.length === 0) {
    IDs.push(0);
    return 0;
  } else {
    IDs.push(Math.max(...IDs) + 1);
    return Math.max(...IDs);
  }
}
function tool(name, stock = 0, price = 0, id = nextId()) {
  return {
    id,
    name,
    stock,
    price,

    updatePrice(newPrice) {
      if (newPrice >= 0) {
        this.price = newPrice;
      } else {
        alert('Invalid Price!');
      }
    },

    describeProduct() {
      console.log('Name: ' + this.name);
      console.log('ID: ' + this.id);
      console.log('Price: ' + this.price);
      console.log('Stock: ' + this.stock);
    },
  };
}

drill = tool('drill', 15, 45);
console.log(drill);
drill.describeProduct();
