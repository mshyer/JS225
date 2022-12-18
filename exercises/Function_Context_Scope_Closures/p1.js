const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
  global: this,
};

console.log(person.fullName);
// this ALWAYS references the global object outside functions.
// Therefore, when JS is running to object literal code to initialize
// The object, it assigns this value global object
// Added together, this makes NaN, and so fullName is assigned
// Value NaN.
