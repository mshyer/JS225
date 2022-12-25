'use strict';
// Inventory Management!
// Item Creator:
// Item Manager: Create items?? Updating item info, deleting items, querying
// Reports Manager: generates reports for one or all items
//   -reports for objects generated from report objects created by manager
// ITEM MANAGER METHODS:
//   -create
//   -update
//   -delete
//   -items
//   -inStock
//   -itemsInCategory
// NOTES:
// Should I use the pseudo-classical structure with class format? I don't see why not
//  -during a test, I would be able to do that, no?
// 
// class ItemManager
// class ItemCreator?
// class ReportManager
// It looks like the example solution is using OLOO?

// const ItemCreator = (function createItem() {
//   function someFunc() {
//   }
//   return function(itemName, category, quantity) {
//     return { itemName, category, quantity };
//   };
// })();

const ItemCreator = function inventoryItem(itemName, category, quantity) {
  function validName() {
    return typeof itemName === 'string' && itemName.replace(/\s/g, '').length >= 5;
  }

  function validCategory() {
    return !/\s/.test(category) && !Object.is(category, null)
      && category.length >= 5;
  }

  function validQuantity() {
    return typeof quantity === 'number' && !Number.isNaN(quantity);
  }

  function generateSKU() {
    let namePart = itemName.replace(/\s/g, '').slice(0, 3);
    let categoryPart = category.slice(0, 2);
    return namePart + categoryPart;
  }

  if (validName() && validCategory() && validQuantity()) {
    this.itemName = itemName;
    this.category = category;
    this.quantity = quantity;
    this.SKU = generateSKU();
  } else {
    return { notValid: true, };
  }
};

const ItemManager = {
  items: [],

  create(itemName, category, quantity) {
    let newItem = new ItemCreator(itemName, category, quantity);
    if (newItem['notValid']) {
      return false;
    }
    this.items.push(newItem);
    return newItem;
  },

  update(sku, obj) {
    let item = this.items.find(ite => ite.SKU === sku);
    for (let prop in obj) {
      item[prop] = obj[prop];
    }
  },

  delete(sku) {
    let deleteIdx = this.items.findIndex(ite => ite.SKU === sku);
    if (deleteIdx !== -1) {
      console.log('about to yeehaw');
      this.items.splice(deleteIdx, 1);
    }
  },

  inStock() {
    let itemsInStock = this.items.filter(ite => ite.quantity > 0);
    if (itemsInStock.length > 0) {
      console.log('** LIST OF ITEMS IN STOCK**');
      itemsInStock.forEach(ite => console.log(ite.itemName));
      console.log('****');
    } else {
      console.log('No Items in Stock Currently.');
    }
  },

  itemsInCategory(category) {
    let selection = this.items.filter(ite => ite.category === category);
    if (selection.length > 0) {
      console.log('**ITEMS IN CATEGORY ' + category + '**');
      selection.forEach(ite => console.log(ite.itemName));
      console.log('****');
    }
  }
};

const ReportManager = {
  init: function(itemManager) {
    this.items = itemManager;
  },
  createReporter(sku) {
    return ({
      itemInfo() {
        let item = ReportManager.items.items.find(ite => ite.SKU === sku);
        for (let key in item) {
          console.log(key + ': ' + item[key]);
        }
      }
    });
  },
  reportInStock() {
    this.items.inStock();
  },

};

let bagel = new ItemCreator('bagels', 'bakery', 5);
console.log(bagel.constructor);
let hamSandwich = ItemManager.create('ham sandwich', 'lunch', 55);
console.log(hamSandwich);
let fartwich = ItemManager.create();
console.log(fartwich);

ItemManager.update('hamlu', {quantity: 1000});
console.log(hamSandwich);
let jamSandwich = ItemManager.create('jam sandwich', 'snack', 10);
console.log('items in manager:');
console.log(ItemManager.items.length);
ItemManager.inStock();
ItemManager.delete('jamsn');
console.log('Items in manager:');
console.log(ItemManager.items.length);
ItemManager.inStock();
ItemManager.itemsInCategory('lunch');
ReportManager.init(ItemManager);
let reporter = ReportManager.createReporter('hamlu');
console.log(reporter.itemInfo());
ReportManager.reportInStock();

console.log(bagel.isValid);
