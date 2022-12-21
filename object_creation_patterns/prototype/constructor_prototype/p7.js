let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object
// let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));
let ninjaB = new ninjaA.constructor();

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
