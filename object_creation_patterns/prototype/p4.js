let prot = {};

let foo = Object.create(prot);

prot.isPrototypeOf(foo);
Object.prototype.isPrototypeOf(foo);
// Will return true, as Object prototype
// Is the last value in the prototype chain
// For all JS objects.
