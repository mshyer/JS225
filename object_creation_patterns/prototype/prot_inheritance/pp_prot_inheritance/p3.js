function extend(destination, ...objs) {
  // similar to Assign, function takes an object input and mutates it
  // any object arguents, the properties are copied to the destination
  // Input: An object to mutate, and any number of other objects
  // Output: a mutated object/with side effects
  // Algorithm:
  // I assume this only applies to own properties///
  // 1. if there are other objs, iterate through them with for
  // 2. use another for loop (for in this time) to loop through own props
  //   -if own prop, set the destination value
  // 3. return the destination
  if (objs.length === 0) {
    return destination;
  }
  for (let idx = 0; idx < objs.length; idx += 1) {
    for (let prop in objs[idx]) {
      if (objs[idx].hasOwnProperty(prop)) {
        destination[prop] = objs[idx][prop];
      }
    }
  }
  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
