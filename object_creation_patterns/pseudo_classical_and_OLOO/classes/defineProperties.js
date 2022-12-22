'use strict';
let obj = {
  name: 'Obj',
};

Object.defineProperties(obj, {
  age: {
    value: 30,
    writable: false,
  },
});

console.log(obj.age);
console.log(obj.name);
obj.name = 'Ben';
// obj.age = 44;
console.log(obj.age);
console.log(obj.name);
