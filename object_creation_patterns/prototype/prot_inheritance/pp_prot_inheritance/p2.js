function shallowCopy(object) {
  // PROBLEM: shallow copy an object AND its prototype chain
  // INPUT: object
  // OUTPUT: shallow copy of object
  // 1. create a new obj from the input object's prototype
  // 2. iterate through the input obj's keys and set the val to equal
  //   for prop in obj newObj[prop] = obj[prop]
  // 3. return the new object
  // NOTE: shallow copy means functions and objects can be copied by reference
  let copy = Object.create(Object.getPrototypeOf(object));
  for (let prop in object) {
    if (Object.prototype.hasOwnProperty.call(object, prop)) {
      copy[prop] = object[prop];
    }
  }
  return copy;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

let baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
console.log(baz.hasOwnProperty('a'));  // false
console.log(baz.hasOwnProperty('b'));  // false
