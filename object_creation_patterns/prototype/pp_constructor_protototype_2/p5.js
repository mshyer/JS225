function neww(constructor, args) {
  // new operator sets this value to a new object
  // new operator sets prototype of that obj to constr
  // the function is then run with the args
  let newObj = Object.create(constructor.prototype);
  let result = constructor.call(newObj, ...args);
  return typeof result === 'object' ? result : newObj;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
console.log(john.constructor);         // Person(firstName, lastName) {...}
