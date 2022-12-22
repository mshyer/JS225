function NewArray() {} //define constructor function
NewArray.prototype = Object.create(Object.getPrototypeOf([])); //set
// the prototype property of the new constructor function to a child object
// Of the Array constructor's prototype

NewArray.prototype.first = function() {
  return this[0];
}; //on the prototype property of the NewArray constructor,
// Define a method `first`. Now the prototype property inherits
// All of the methods from Array, and defines some of its own methods
//
let newArr = new NewArray();
let oldArr = new Array();

oldArr.push(5);
newArr.push(5);
oldArr.push(2);
newArr.push(2);

console.log(newArr.first());
console.log(newArr[0]);
console.log(oldArr.first);
