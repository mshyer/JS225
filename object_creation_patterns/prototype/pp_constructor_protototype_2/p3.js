function createObject(obj) {
  // let childObj = {};
  // Object.setPrototypeOf(childObj, obj);
  function F() {};
  F.prototype = obj;
  return new F();
}

let foo = {
  a: 1,
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));
