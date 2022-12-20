let foo = {};
let bar = Object.create(foo);

foo.a = 1;

console.log(bar.a);
// 1
