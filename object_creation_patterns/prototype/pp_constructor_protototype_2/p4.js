Object.prototype.begetObject = function() {
  function Constr1() {}
  Constr1.prototype = this;
  return new Constr1();
};

let foo = {
  a: 1,
};

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true
