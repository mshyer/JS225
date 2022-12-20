let prot = {};

let foo = Object.create(prot);

console.log(Object.getPrototypeOf(foo) === prot);
