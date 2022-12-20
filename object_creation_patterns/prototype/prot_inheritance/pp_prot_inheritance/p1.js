function getDefiningObject(object, propKey) {
  // 1. find all prototypes
  // 2. check each prototype including self for own property
  // 3. as soon as an object has own property, return it
  // Input: 1: object to check, 2: property name to check
  // Output: Object (the prototype)
  // Algorithm:
  // 1. init array of prototype objects to []
  // 2. init currentPrototype var to object
  // 3. while the currentPrototype !== null
  //    - check if the currentPrototype has own property propKey
  //    - if it does, return that object
  //    - else currentPrototype = getPrototypeOf
  // 4. Return null at the end
  //
  let currentPrototype = object;
  while (currentPrototype !== null) {
    if (currentPrototype.hasOwnProperty(propKey)) {
      return currentPrototype;
    } else {
      currentPrototype = Object.getPrototypeOf(currentPrototype);
    }
  }
  return null;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null
